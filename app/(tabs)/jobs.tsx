import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Theme } from '@/constants/Theme';
import Animated, { FadeInUp } from 'react-native-reanimated';

export default function JobsScreen() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.title}>Jobs</Text>
          <Text style={styles.subtitle}>VERIFIED WEB3 GIGS</Text>
        </View>

        <Animated.View entering={FadeInUp.delay(100)} style={styles.jobCard}>
          <Text style={styles.jobTitle}>Smart Contract Auditor</Text>
          <Text style={styles.jobCompany}>Solana Labs</Text>
          <Text style={styles.jobBudget}>$8,000 - $12,000 / month</Text>
        </Animated.View>

        <Animated.View entering={FadeInUp.delay(200)} style={styles.jobCard}>
          <Text style={styles.jobTitle}>React Native Developer</Text>
          <Text style={styles.jobCompany}>Skillchain Escrow</Text>
          <Text style={styles.jobBudget}>$6,500 / month</Text>
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
  jobCard: {
    backgroundColor: '#E5E7EB',
    borderRadius: 20,
    padding: 20,
    marginBottom: 16,
  },
  jobTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: '#111827',
  },
  jobCompany: {
    fontSize: 14,
    fontWeight: '800',
    color: '#1E3A8A',
    marginTop: 4,
  },
  jobBudget: {
    fontSize: 14,
    color: '#4B5563',
    marginTop: 8,
    fontWeight: '700',
  },
});
