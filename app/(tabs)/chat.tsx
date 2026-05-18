import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Theme } from '@/constants/Theme';
import { useRouter } from 'expo-router';
import Animated, { FadeInUp } from 'react-native-reanimated';

export default function ChatScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Messages</Text>
        </View>

        {/* Chat List Item */}
        <Animated.View entering={FadeInUp.delay(100)}>
          <TouchableOpacity 
            style={styles.chatItem}
            onPress={() => router.push('/chat-detail')}
          >
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>S</Text>
            </View>
            <View style={styles.chatDetails}>
              <Text style={styles.chatName}>SirG47</Text>
              <Text style={styles.chatPreview}>Tap to view conversation</Text>
            </View>
          </TouchableOpacity>
        </Animated.View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.background,
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingTop: 64,
    paddingBottom: 100,
  },
  header: {
    marginBottom: 28,
  },
  title: {
    fontSize: 34,
    fontWeight: '800',
    color: '#111827',
    letterSpacing: -1,
  },
  chatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  avatar: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: '#DCE4F9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#3B82F6',
  },
  chatDetails: {
    flex: 1,
    marginLeft: 16,
    justifyContent: 'center',
  },
  chatName: {
    fontSize: 18,
    fontWeight: '800',
    color: '#111827',
  },
  chatPreview: {
    fontSize: 14,
    color: '#4B5563',
    marginTop: 2,
    fontWeight: '500',
  },
});
