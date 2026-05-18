import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { Theme } from '@/constants/Theme';
import { Ionicons } from '@expo/vector-icons';
import Animated, { FadeInUp } from 'react-native-reanimated';

export default function DiscoverScreen() {
  const categories = ['All', 'Kotlin', 'Solana', 'UI/UX'];
  const activeCategory = 'All';

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Discover</Text>
        <Text style={styles.subtitle}>ELITE WEB3 TALENT</Text>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#9CA3AF" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search skills, names or chains..."
          placeholderTextColor="#9CA3AF"
        />
      </View>

      {/* Horizontal Category Chips */}
      <View style={styles.chipsContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.chipsContent}>
          {categories.map((category) => {
            const isActive = category === activeCategory;
            return (
              <TouchableOpacity
                key={category}
                style={[styles.chip, isActive ? styles.chipActive : styles.chipInactive]}
              >
                <Text style={[styles.chipText, isActive ? styles.chipTextActive : styles.chipTextInactive]}>
                  {category}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>

      {/* Talent Cards */}
      <ScrollView contentContainerStyle={styles.cardsScroll} showsVerticalScrollIndicator={false}>
        {/* Katy Pery Card */}
        <Animated.View entering={FadeInUp.delay(100)} style={styles.talentCard}>
          <View style={styles.cardHeader}>
            <View style={styles.avatarWrapper}>
              <View style={styles.avatar}>
                <Text style={styles.avatarText}>KP</Text>
              </View>
              <View style={styles.activeDot} />
            </View>
            <View style={styles.talentInfo}>
              <Text style={styles.talentName}>Katy Pery</Text>
              <Text style={styles.talentRole}>WEB3 DEVELOPER</Text>
            </View>
            <View style={styles.rateContainer}>
              <Text style={styles.rateText}>Neg.</Text>
            </View>
          </View>
        </Animated.View>

        {/* SirG47 Card */}
        <Animated.View entering={FadeInUp.delay(200)} style={styles.talentCard}>
          <View style={styles.cardHeader}>
            <View style={styles.avatarWrapper}>
              <View style={styles.avatar}>
                <Text style={styles.avatarText}>S</Text>
              </View>
              <View style={styles.activeDot} />
            </View>
            <View style={styles.talentInfo}>
              <Text style={styles.talentName}>SirG47</Text>
              {/* Skill tags list matching screenshot */}
              <View style={styles.skillsRow}>
                <View style={styles.skillBadge}>
                  <Text style={styles.skillBadgeText}>APPLICATION SECURITY</Text>
                </View>
                <View style={styles.skillBadge}>
                  <Text style={styles.skillBadgeText}>ENDPOINT SEC</Text>
                </View>
              </View>
            </View>
            <View style={styles.rateContainer}>
              <Text style={styles.rateText}>$30</Text>
              <Text style={styles.rateSubtext}>/ HOUR</Text>
            </View>
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
  header: {
    paddingHorizontal: 24,
    paddingTop: 64,
    paddingBottom: 16,
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
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0F172A', // Dark slate rounded search bar matching mockup
    marginHorizontal: 24,
    borderRadius: 24,
    paddingHorizontal: 20,
    paddingVertical: 14,
    marginBottom: 20,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
  },
  chipsContainer: {
    height: 48,
    marginBottom: 16,
  },
  chipsContent: {
    paddingHorizontal: 24,
    gap: 8,
    alignItems: 'center',
  },
  chip: {
    paddingHorizontal: 22,
    paddingVertical: 10,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chipActive: {
    backgroundColor: '#0F172A', // Dark slate active tag matching mockup
  },
  chipInactive: {
    backgroundColor: '#E5E7EB', // Soft gray inactive tags matching mockup
  },
  chipText: {
    fontSize: 14,
    fontWeight: '700',
  },
  chipTextActive: {
    color: '#FFFFFF',
  },
  chipTextInactive: {
    color: '#4B5563',
  },
  cardsScroll: {
    paddingHorizontal: 24,
    paddingBottom: 100,
    gap: 16,
  },
  talentCard: {
    backgroundColor: '#E5E7EB', // light periwinkle/lavender gray background card from mockups
    borderRadius: 20,
    padding: 20,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarWrapper: {
    position: 'relative',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#DCE4F9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#3B82F6',
  },
  activeDot: {
    position: 'absolute',
    bottom: 0,
    right: 2,
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#10B981', // green active dot
    borderWidth: 2,
    borderColor: '#E5E7EB',
  },
  talentInfo: {
    flex: 1,
    marginLeft: 16,
    justifyContent: 'center',
  },
  talentName: {
    fontSize: 20,
    fontWeight: '800',
    color: '#111827',
  },
  talentRole: {
    fontSize: 12,
    fontWeight: '800',
    color: '#1E3A8A',
    marginTop: 2,
  },
  skillsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 4,
    marginTop: 8,
  },
  skillBadge: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  skillBadgeText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#4B5563',
  },
  rateContainer: {
    alignItems: 'flex-end',
  },
  rateText: {
    fontSize: 20,
    fontWeight: '800',
    color: '#111827',
  },
  rateSubtext: {
    fontSize: 10,
    fontWeight: '700',
    color: '#4B5563',
    marginTop: 2,
  },
});
