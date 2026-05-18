import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Theme } from '@/constants/Theme';
import { Ionicons } from '@expo/vector-icons';
import Animated, { FadeInUp } from 'react-native-reanimated';

export default function ProfileScreen() {
  const skills = ['APPLICATION SECURITY', 'ENDPOINT SECURITY', 'NETWORK SECURITY'];

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>User Profile</Text>
        </View>

        {/* Profile Card */}
        <Animated.View entering={FadeInUp.delay(100)} style={styles.profileCard}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>S</Text>
          </View>
          <View style={styles.profileDetails}>
            <Text style={styles.username}>SirG47</Text>
            <Text style={styles.email}>h4cker4u@proton.me</Text>
            
            {/* Small active/selection dot indicator below email from mockup */}
            <View style={styles.selectorDotContainer}>
              <View style={styles.selectorDot} />
            </View>
          </View>
        </Animated.View>

        {/* Bio Section */}
        <Animated.View entering={FadeInUp.delay(200)} style={styles.section}>
          <Text style={styles.sectionTitle}>Bio</Text>
          <Text style={styles.bioText}>
            Web3 Security Researcher and Forensic Auditor. Specialized in smart contract security auditing, threat modeling, and mobile-native network defense on Solana.
          </Text>
        </Animated.View>

        {/* Hourly Rate Section */}
        <Animated.View entering={FadeInUp.delay(300)} style={styles.section}>
          <Text style={styles.rateLabel}>Hourly Rate</Text>
          <Text style={styles.rateValue}>$30.0 / hr</Text>
        </Animated.View>

        {/* Skills Section */}
        <Animated.View entering={FadeInUp.delay(400)} style={styles.section}>
          <Text style={styles.sectionTitle}>Skills</Text>
          <View style={styles.skillsRow}>
            {skills.map((skill) => (
              <View key={skill} style={styles.skillPill}>
                <Text style={styles.skillText}>{skill}</Text>
              </View>
            ))}
          </View>
        </Animated.View>

        {/* Work Experience Section */}
        <Animated.View entering={FadeInUp.delay(500)} style={styles.section}>
          <Text style={styles.sectionTitle}>Work Experience</Text>
          <View style={styles.experienceCard}>
            <Text style={styles.experienceRole}>Forensic Expert</Text>
            <Text style={styles.experienceCompany}>Interpool</Text>
            <Text style={styles.experienceDates}>Jan 2021 - Present</Text>
          </View>
        </Animated.View>

        {/* Education Section */}
        <Animated.View entering={FadeInUp.delay(600)} style={styles.section}>
          <Text style={styles.sectionTitle}>Education</Text>
          <View style={styles.experienceCard}>
            <Text style={styles.experienceRole}>B.Sc. Cyber Security</Text>
            <Text style={styles.experienceCompany}>Gateway ICT Polytechnic</Text>
            <Text style={styles.experienceDates}>Graduated 2024</Text>
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
    paddingBottom: 120,
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
  profileCard: {
    backgroundColor: '#E5E7EB', // matching screenshots' lavender gray card
    borderRadius: 20,
    padding: 24,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 28,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#DCE4F9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    fontSize: 28,
    fontWeight: '700',
    color: '#3B82F6',
  },
  profileDetails: {
    marginLeft: 20,
    flex: 1,
  },
  username: {
    fontSize: 24,
    fontWeight: '800',
    color: '#111827',
  },
  email: {
    fontSize: 15,
    color: '#4B5563',
    marginTop: 4,
    fontWeight: '500',
  },
  selectorDotContainer: {
    marginTop: 10,
    alignItems: 'flex-start',
  },
  selectorDot: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#9CA3AF',
    opacity: 0.4,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: '#111827',
    marginBottom: 12,
  },
  bioText: {
    fontSize: 15,
    color: '#374151',
    lineHeight: 22,
    fontWeight: '500',
  },
  rateLabel: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1E3A8A', // Muted deep blue label from screenshot
    marginBottom: 6,
  },
  rateValue: {
    fontSize: 26,
    fontWeight: '800',
    color: '#111827',
  },
  skillsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  skillPill: {
    backgroundColor: '#E5E7EB', // light lavender-gray skill tag pill
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 12,
  },
  skillText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#374151',
  },
  experienceCard: {
    backgroundColor: '#E5E7EB', // matching screenshots' lavender gray card
    borderRadius: 16,
    padding: 18,
  },
  experienceRole: {
    fontSize: 18,
    fontWeight: '800',
    color: '#111827',
  },
  experienceCompany: {
    fontSize: 14,
    fontWeight: '800',
    color: '#1E3A8A',
    marginTop: 4,
  },
  experienceDates: {
    fontSize: 13,
    color: '#4B5563',
    marginTop: 4,
    fontWeight: '500',
  },
});
