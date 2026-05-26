import React, { useState, useEffect, useRef, useCallback } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  ScrollView, 
  TouchableOpacity, 
  KeyboardAvoidingView, 
  Platform, 
  ActivityIndicator, 
  Alert 
} from 'react-native';
import { Theme } from '@/constants/Theme';
import { Ionicons } from '@expo/vector-icons';
import { useRouter, useLocalSearchParams } from 'expo-router';
import Animated, { FadeIn } from 'react-native-reanimated';
import { supabase } from '@/constants/Supabase';

interface Message {
  id: string;
  sender_id: string;
  receiver_id: string;
  content: string;
  created_at: string;
}

export default function ChatDetailScreen() {
  const router = useRouter();
  const { userId, name } = useLocalSearchParams();
  const [inputText, setInputText] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentUserId, setCurrentUserId] = useState<string | null>(null);
  
  const scrollViewRef = useRef<ScrollView>(null);

  const setupChat = useCallback(async () => {
    if (!userId) return;
    setLoading(true);
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;
      setCurrentUserId(user.id);

      // Fetch message history
      const { data, error } = await supabase
        .from('messages')
        .select('*')
        .or(`and(sender_id.eq.${user.id},receiver_id.eq.${userId}),and(sender_id.eq.${userId},receiver_id.eq.${user.id})`)
        .order('created_at', { ascending: true });

      if (error) throw error;
      setMessages(data || []);

      // Subscribe to real-time message changes
      const channel = supabase
        .channel(`chat-room-${user.id}-${userId}`)
        .on(
          'postgres_changes',
          { event: 'INSERT', schema: 'public', table: 'messages' },
          (payload) => {
            const newMsg = payload.new as Message;
            if (
              (newMsg.sender_id === user.id && newMsg.receiver_id === userId) ||
              (newMsg.sender_id === userId && newMsg.receiver_id === user.id)
            ) {
              setMessages(prev => {
                if (prev.some(m => m.id === newMsg.id)) return prev;
                return [...prev, newMsg];
              });
              setTimeout(() => scrollViewRef.current?.scrollToEnd({ animated: true }), 100);
            }
          }
        )
        .subscribe();

      setTimeout(() => scrollViewRef.current?.scrollToEnd({ animated: false }), 200);

      return () => {
        supabase.removeChannel(channel);
      };
    } catch (e: any) {
      console.error('Chat setup error:', e.message);
    } finally {
      setLoading(false);
    }
  }, [userId]);

  useEffect(() => {
    setupChat();
  }, [setupChat]);

  const handleSendMessage = async () => {
    if (!inputText.trim() || !currentUserId || !userId) return;
    const msgText = inputText.trim();
    setInputText('');

    try {
      const newMsg = {
        sender_id: currentUserId,
        receiver_id: userId as string,
        content: msgText,
      };

      const { data, error } = await supabase
        .from('messages')
        .insert(newMsg)
        .select()
        .single();

      if (error) throw error;
      if (data) {
        setMessages(prev => {
          if (prev.some(m => m.id === data.id)) return prev;
          return [...prev, data];
        });
        setTimeout(() => scrollViewRef.current?.scrollToEnd({ animated: true }), 50);

        // Notify Receiver
        await supabase.from('notifications').insert({
          receiver_id: userId as string,
          sender_id: currentUserId,
          type: 'chat',
          content: 'sent you a message'
        });
      }
    } catch (e: any) {
      Alert.alert('Send Error', e.message || 'Failed to send message.');
    }
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color="#111827" />
          </TouchableOpacity>
          <Text style={styles.headerName}>{name || 'Chat'}</Text>
        </View>
        
        {/* Right side payment $ action */}
        <TouchableOpacity style={styles.payButton}>
          <Text style={styles.payButtonText}>$</Text>
        </TouchableOpacity>
      </View>

      {/* Messages */}
      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={Theme.colors.primary} />
        </View>
      ) : (
        <ScrollView 
          ref={scrollViewRef}
          contentContainerStyle={styles.messagesContainer} 
          showsVerticalScrollIndicator={false}
          onContentSizeChange={() => scrollViewRef.current?.scrollToEnd({ animated: true })}
        >
          {messages.length === 0 ? (
            <Text style={styles.emptyText}>No messages yet. Send a message to start conversation!</Text>
          ) : (
            messages.map((msg, index) => {
              const isMe = msg.sender_id === currentUserId;
              const msgTime = new Date(msg.created_at).toLocaleTimeString(undefined, { 
                hour: '2-digit', 
                minute: '2-digit' 
              });

              return (
                <Animated.View 
                  key={msg.id || index}
                  entering={FadeIn.delay(50)} 
                  style={isMe ? styles.messageRowRight : styles.messageRowLeft}
                >
                  <View style={isMe ? styles.bubbleRight : styles.bubbleLeft}>
                    <Text style={isMe ? styles.messageTextRight : styles.messageTextLeft}>
                      {msg.content}
                    </Text>
                    <Text style={isMe ? styles.timestampTextRight : styles.timestampTextLeft}>
                      {msgTime}
                    </Text>
                  </View>
                </Animated.View>
              );
            })
          )}
        </ScrollView>
      )}

      {/* Input Bar */}
      <View style={styles.inputBar}>
        <TextInput 
          style={styles.input}
          placeholder="Type a message..."
          placeholderTextColor="#9CA3AF"
          value={inputText}
          onChangeText={setInputText}
          onSubmitEditing={handleSendMessage}
        />
        <TouchableOpacity 
          style={styles.sendButton}
          onPress={handleSendMessage}
        >
          <Ionicons name="send" size={18} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.background,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    textAlign: 'center',
    color: '#9CA3AF',
    fontWeight: '500',
    marginTop: 40,
    paddingHorizontal: 30,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 64,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
    backgroundColor: Theme.colors.background,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    marginRight: 16,
  },
  headerName: {
    fontSize: 20,
    fontWeight: '800',
    color: '#111827',
  },
  payButton: {
    padding: 6,
  },
  payButtonText: {
    fontSize: 22,
    fontWeight: '700',
    color: '#111827',
  },
  messagesContainer: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 24,
  },
  messageRowLeft: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 12,
  },
  messageRowRight: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 12,
  },
  bubbleLeft: {
    backgroundColor: '#EAEAF2',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
    maxWidth: '80%',
  },
  bubbleRight: {
    backgroundColor: '#405B8F',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
    maxWidth: '80%',
  },
  messageTextLeft: {
    fontSize: 15,
    color: '#1F2937',
    fontWeight: '500',
  },
  messageTextRight: {
    fontSize: 15,
    color: '#FFFFFF',
    fontWeight: '500',
  },
  timestampTextLeft: {
    fontSize: 10,
    color: '#9CA3AF',
    alignSelf: 'flex-end',
    marginTop: 4,
    fontWeight: '600',
  },
  timestampTextRight: {
    fontSize: 10,
    color: '#D1D5DB',
    alignSelf: 'flex-end',
    marginTop: 4,
    fontWeight: '600',
  },
  inputBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    backgroundColor: Theme.colors.background,
    gap: 12,
  },
  input: {
    flex: 1,
    backgroundColor: '#EAEAF2',
    borderRadius: 24,
    paddingHorizontal: 20,
    paddingVertical: 12,
    fontSize: 15,
    color: '#111827',
    fontWeight: '500',
  },
  sendButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#405B8F',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
