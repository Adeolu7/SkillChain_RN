import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Theme } from '@/constants/Theme';
import Animated, { FadeInUp } from 'react-native-reanimated';

export default function ChatScreen() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.title}>Chat</Text>
          <Text style={styles.subtitle}>SECURE WEB3 MESSAGES</Text>
        </View>

        <Animated.View entering={FadeInUp.delay(100)} style={styles.chatItem}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>KP</Text>
          </View>
          <View style={styles.chatDetails}>
            <Text style={styles.chatName}>Katy Pery</Text>
            <Text style={styles.chatPreview}>Let's discuss the security audit details.</Text>
          </View>
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
    marginBottom: 24,
  },
  title: {
    fontSize: 40,
    fontWeight: '800',
    color: '#111827',
    letterSpacing: -1,
  },
  subtitle: {
    fontSize: 12,
    fontWeight: '800',
    color: '#1E293B',
    letterSpacing: 1.5,
    marginTop: 4,
  },
  chatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E5E7EB',
    borderRadius: 20,
    padding: 16,
    marginBottom: 12,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#DCE4F9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#3B82F6',
  },
  chatDetails: {
    flex: 1,
    marginLeft: 16,
  },
  chatName: {
    fontSize: 18,
    fontWeight: '800',
    color: '#111827',
  },
  chatPreview: {
    fontSize: 13,
    color: '#4B5563',
    marginTop: 2,
    fontWeight: '500',
  },
});
