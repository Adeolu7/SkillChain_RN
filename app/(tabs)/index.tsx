import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Theme } from '@/constants/Theme';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import Animated, { FadeInUp } from 'react-native-reanimated';

export default function DashboardScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Hello, Alex</Text>
          <Text style={styles.subtitle}>Welcome back to Skillchain</Text>
        </View>
        <TouchableOpacity style={styles.profileButton}>
          <Ionicons name="notifications-outline" size={24} color={Theme.colors.text} />
        </TouchableOpacity>
      </View>

      <Animated.View entering={FadeInUp.delay(200)} style={styles.statsCard}>
        <LinearGradient
          colors={[Theme.colors.primary, Theme.colors.secondary]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.statsGradient}
        >
          <View style={styles.statItem}>
            <Text style={styles.statValue}>12</Text>
            <Text style={styles.statLabel}>Verified Skills</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.statItem}>
            <Text style={styles.statValue}>5</Text>
            <Text style={styles.statLabel}>Pending</Text>
          </View>
        </LinearGradient>
      </Animated.View>

      <Text style={styles.sectionTitle}>Verification Requests</Text>
      
      <Animated.View entering={FadeInUp.delay(400)} style={styles.requestCard}>
        <View style={styles.requestIcon}>
          <Ionicons name="code-slash" size={24} color={Theme.colors.primary} />
        </View>
        <View style={styles.requestInfo}>
          <Text style={styles.requestTitle}>React Native Developer</Text>
          <Text style={styles.requestStatus}>Verification in progress</Text>
        </View>
        <View style={styles.statusBadge}>
          <Text style={styles.statusText}>90%</Text>
        </View>
      </Animated.View>

      <Animated.View entering={FadeInUp.delay(600)} style={styles.requestCard}>
        <View style={styles.requestIcon}>
          <Ionicons name="logo-solana" size={24} color={Theme.colors.accent} />
        </View>
        <View style={styles.requestInfo}>
          <Text style={styles.requestTitle}>Rust Smart Contracts</Text>
          <Text style={styles.requestStatus}>Awaiting on-chain mint</Text>
        </View>
        <View style={styles.statusBadgeAccent}>
          <Text style={styles.statusText}>Minting</Text>
        </View>
      </Animated.View>

      <Text style={styles.sectionTitle}>Quick Actions</Text>
      <View style={styles.actionsGrid}>
        <TouchableOpacity style={styles.actionButton}>
          <View style={[styles.actionIcon, { backgroundColor: '#3B82F620' }]}>
            <Ionicons name="add-circle-outline" size={24} color="#3B82F6" />
          </View>
          <Text style={styles.actionText}>Add Skill</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <View style={[styles.actionIcon, { backgroundColor: '#10B98120' }]}>
            <Ionicons name="wallet-outline" size={24} color="#10B981" />
          </View>
          <Text style={styles.actionText}>Wallet</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <View style={[styles.actionIcon, { backgroundColor: '#F59E0B20' }]}>
            <Ionicons name="share-social-outline" size={24} color="#F59E0B" />
          </View>
          <Text style={styles.actionText}>Share Profile</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.background,
  },
  content: {
    padding: Theme.spacing.lg,
    paddingTop: 60,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Theme.spacing.xl,
  },
  greeting: {
    fontSize: 24,
    fontWeight: '800',
    color: Theme.colors.text,
  },
  subtitle: {
    fontSize: 14,
    color: Theme.colors.textMuted,
  },
  profileButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: Theme.colors.surface,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Theme.colors.border,
  },
  statsCard: {
    borderRadius: Theme.borderRadius.xl,
    overflow: 'hidden',
    marginBottom: Theme.spacing.xl,
    elevation: 8,
    shadowColor: Theme.colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  statsGradient: {
    flexDirection: 'row',
    padding: Theme.spacing.xl,
    alignItems: 'center',
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
  },
  statValue: {
    fontSize: 28,
    fontWeight: '800',
    color: 'white',
  },
  statLabel: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.8)',
    marginTop: 4,
  },
  divider: {
    width: 1,
    height: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: Theme.colors.text,
    marginBottom: Theme.spacing.md,
    marginTop: Theme.spacing.md,
  },
  requestCard: {
    flexDirection: 'row',
    backgroundColor: Theme.colors.surface,
    padding: Theme.spacing.md,
    borderRadius: Theme.borderRadius.lg,
    alignItems: 'center',
    marginBottom: Theme.spacing.md,
    borderWidth: 1,
    borderColor: Theme.colors.border,
  },
  requestIcon: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: Theme.colors.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  requestInfo: {
    flex: 1,
    marginLeft: Theme.spacing.md,
  },
  requestTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: Theme.colors.text,
  },
  requestStatus: {
    fontSize: 12,
    color: Theme.colors.textMuted,
    marginTop: 2,
  },
  statusBadge: {
    backgroundColor: Theme.colors.primary + '20',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  statusBadgeAccent: {
    backgroundColor: Theme.colors.accent + '20',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '700',
    color: Theme.colors.text,
  },
  actionsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: Theme.spacing.md,
  },
  actionButton: {
    flex: 1,
    backgroundColor: Theme.colors.surface,
    padding: Theme.spacing.md,
    borderRadius: Theme.borderRadius.lg,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Theme.colors.border,
  },
  actionIcon: {
    width: 44,
    height: 44,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: Theme.spacing.sm,
  },
  actionText: {
    fontSize: 12,
    fontWeight: '600',
    color: Theme.colors.text,
  },
});
