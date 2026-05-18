import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { Theme } from '@/constants/Theme';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import Animated, { FadeIn } from 'react-native-reanimated';

export default function ChatDetailScreen() {
  const router = useRouter();
  const [inputText, setInputText] = useState('');

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
          <Text style={styles.headerName}>SirG47</Text>
        </View>
        
        {/* Right side payment $ action from screenshot */}
        <TouchableOpacity style={styles.payButton}>
          <Text style={styles.payButtonText}>$</Text>
        </TouchableOpacity>
      </View>

      {/* Messages */}
      <ScrollView contentContainerStyle={styles.messagesContainer} showsVerticalScrollIndicator={false}>
        {/* Date Divider */}
        <View style={styles.dateDividerContainer}>
          <View style={styles.dateDivider}>
            <Text style={styles.dateText}>May 13, 2026</Text>
          </View>
        </View>

        {/* Left Message Bubble 1 */}
        <Animated.View entering={FadeIn.delay(100)} style={styles.messageRowLeft}>
          <View style={styles.bubbleLeft}>
            <Text style={styles.messageText}>hello there</Text>
            <Text style={styles.timestampText}>17:29</Text>
          </View>
        </Animated.View>

        {/* Left Message Bubble 2 */}
        <Animated.View entering={FadeIn.delay(200)} style={styles.messageRowLeft}>
          <View style={styles.bubbleLeft}>
            <Text style={styles.messageText}>Katy</Text>
            <Text style={styles.timestampText}>17:30</Text>
          </View>
        </Animated.View>
      </ScrollView>

      {/* Input Bar */}
      <View style={styles.inputBar}>
        <TextInput 
          style={styles.input}
          placeholder="Type a message..."
          placeholderTextColor="#9CA3AF"
          value={inputText}
          onChangeText={setInputText}
        />
        <TouchableOpacity style={styles.sendButton}>
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
  dateDividerContainer: {
    alignItems: 'center',
    marginVertical: 16,
  },
  dateDivider: {
    backgroundColor: '#EAEAF2',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 8,
  },
  dateText: {
    fontSize: 12,
    color: '#4B5563',
    fontWeight: '600',
  },
  messageRowLeft: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
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
    position: 'relative',
  },
  messageText: {
    fontSize: 15,
    color: '#1F2937',
    fontWeight: '500',
  },
  timestampText: {
    fontSize: 10,
    color: '#9CA3AF',
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
    backgroundColor: '#405B8F', // matches blue send action circle precisely from screenshot
    justifyContent: 'center',
    alignItems: 'center',
  },
});
