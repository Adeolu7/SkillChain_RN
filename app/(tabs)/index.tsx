import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Pressable } from 'react-native';
import { Theme } from '@/constants/Theme';
import { Ionicons } from '@expo/vector-icons';
import Animated, { FadeIn } from 'react-native-reanimated';

export default function HomeFeedScreen() {
  const [showSharePopover, setShowSharePopover] = useState(false);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>SkillChain</Text>
        <TouchableOpacity style={styles.notificationButton}>
          <Ionicons name="notifications" size={24} color="#111827" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Post Card */}
        <Animated.View entering={FadeIn.duration(600)} style={styles.postCard}>
          {/* User Info Header */}
          <View style={styles.postHeader}>
            <View style={styles.avatarContainer}>
              <Text style={styles.avatarText}>S</Text>
            </View>
            <View style={styles.userInfo}>
              <Text style={styles.username}>SirG47</Text>
              <Text style={styles.postDate}>May 13, 2026</Text>
            </View>
          </View>

          {/* Post Content */}
          <Text style={styles.postBody}>
            SkillChain combines the best of LinkedIn and Upwork — built mobile-native for Solana.{'\n\n'}
            It's a professional network where Web3 talent build verified on-chain portfolios and connect with peers, plus a talent marketplace where clients hire, freelancers post gigs, and payments/escrow happen instantly in $SKR and SOL. All signing and discovery happen inside the Solana Mobile ecosystem.
          </Text>

          {/* Divider line before actions */}
          <View style={styles.divider} />

          {/* Post Actions */}
          <View style={styles.postActions}>
            <TouchableOpacity style={styles.actionItem}>
              <Ionicons name="thumbs-up" size={20} color="#3B82F6" />
              <Text style={styles.actionTextActive}>2 Likes</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionItem}>
              <Ionicons name="chatbubble-outline" size={20} color="#4B5563" />
              <Text style={styles.actionText}>0 Comments</Text>
            </TouchableOpacity>

            <View style={styles.shareContainer}>
              <TouchableOpacity 
                style={styles.shareItem}
                onPress={() => setShowSharePopover(!showSharePopover)}
              >
                <Ionicons name="share-social" size={20} color="#4B5563" />
              </TouchableOpacity>

              {/* Share Popover precisely replicating mockup 4 */}
              {showSharePopover && (
                <Animated.View entering={FadeIn.duration(200)} style={styles.sharePopover}>
                  <TouchableOpacity 
                    style={styles.popoverItem}
                    onPress={() => setShowSharePopover(false)}
                  >
                    <Text style={styles.popoverText}>WhatsApp</Text>
                  </TouchableOpacity>
                  <View style={styles.popoverDivider} />
                  <TouchableOpacity 
                    style={styles.popoverItem}
                    onPress={() => setShowSharePopover(false)}
                  >
                    <Text style={styles.popoverText}>Twitter (X)</Text>
                  </TouchableOpacity>
                </Animated.View>
              )}
            </View>
          </View>
        </Animated.View>
      </ScrollView>

      {/* Floating Action Button */}
      <TouchableOpacity style={styles.fab}>
        <Ionicons name="add" size={26} color="#1F2937" />
      </TouchableOpacity>
    </View>
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
    backgroundColor: Theme.colors.background,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: '#111827',
    letterSpacing: -0.5,
  },
  notificationButton: {
    padding: 4,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 100,
  },
  postCard: {
    backgroundColor: Theme.colors.surface,
    borderRadius: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    zIndex: 1,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  avatarContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#DCE4F9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#3B82F6',
  },
  userInfo: {
    marginLeft: 12,
  },
  username: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111827',
  },
  postDate: {
    fontSize: 13,
    color: Theme.colors.textMuted,
    marginTop: 1,
    fontWeight: '500',
  },
  postBody: {
    fontSize: 15,
    color: '#1F2937',
    lineHeight: 22,
    fontWeight: '500',
    marginBottom: 20,
  },
  divider: {
    height: 1,
    backgroundColor: '#E5E7EB',
    marginBottom: 16,
  },
  postActions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
  },
  actionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  actionText: {
    fontSize: 14,
    color: '#4B5563',
    fontWeight: '600',
  },
  actionTextActive: {
    fontSize: 14,
    color: '#2563EB',
    fontWeight: '600',
  },
  shareContainer: {
    position: 'relative',
    zIndex: 10,
  },
  shareItem: {
    padding: 4,
  },
  sharePopover: {
    position: 'absolute',
    right: 0,
    bottom: 32,
    backgroundColor: '#EAEAF2', // light lavender-gray background matching popover in mockup 4
    borderRadius: 12,
    paddingVertical: 8,
    width: 140,
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    zIndex: 20,
  },
  popoverItem: {
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  popoverText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#111827',
  },
  popoverDivider: {
    height: 1,
    backgroundColor: '#E5E7EB',
  },
  fab: {
    position: 'absolute',
    right: 24,
    bottom: 24,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#DCE4F9',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
  },
});
