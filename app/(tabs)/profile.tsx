import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Theme } from '@/constants/Theme';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import Animated, { FadeInUp } from 'react-native-reanimated';

export default function ProfileScreen() {
  const router = useRouter();
  // State to toggle between "My Profile" (Katy Pery) and "User Profile" (SirG47)
  const [profileMode, setProfileMode] = useState<'MY_PROFILE' | 'SIR_G47'>('MY_PROFILE');
  const skills = ['APPLICATION SECURITY', 'ENDPOINT SECURITY', 'NETWORK SECURITY'];

  return (
    <View style={styles.container}>
      {/* Top Interactive Toggle Switch for the User to easily preview both mockups */}
      <View style={styles.toggleContainer}>
        <TouchableOpacity 
          style={[styles.toggleBtn, profileMode === 'MY_PROFILE' && styles.toggleBtnActive]}
          onPress={() => setProfileMode('MY_PROFILE')}
        >
          <Text style={[styles.toggleBtnText, profileMode === 'MY_PROFILE' && styles.toggleBtnTextActive]}>
            My Profile
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.toggleBtn, profileMode === 'SIR_G47' && styles.toggleBtnActive]}
          onPress={() => setProfileMode('SIR_G47')}
        >
          <Text style={[styles.toggleBtnText, profileMode === 'SIR_G47' && styles.toggleBtnTextActive]}>
            User Profile
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Dynamic Header */}
        {profileMode === 'MY_PROFILE' ? (
          <View style={styles.header}>
            <Text style={styles.title}>My Profile</Text>
            <View style={styles.headerActions}>
              <TouchableOpacity style={styles.headerActionBtn} onPress={() => router.replace('/(auth)/login')}>
                <Ionicons name="log-out-outline" size={24} color="#111827" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.headerActionBtn}>
                <Ionicons name="pencil-outline" size={22} color="#111827" />
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <View style={styles.header}>
            <Text style={styles.title}>User Profile</Text>
          </View>
        )}

        {/* Dynamic Profile Card */}
        {profileMode === 'MY_PROFILE' ? (
          <Animated.View key="my-profile-card" entering={FadeInUp.delay(100)} style={styles.profileCard}>
            <View style={styles.avatar}>
              <Text style={styles.avatarTextBlue}>KP</Text>
            </View>
            <View style={styles.profileDetails}>
              <Text style={styles.username}>Katy Pery</Text>
              <Text style={styles.email}>terrygbadebo@gmail.com</Text>
              <View style={styles.selectorDotContainer}>
                <View style={styles.selectorDot} />
              </View>
            </View>
          </Animated.View>
        ) : (
          <Animated.View key="user-profile-card" entering={FadeInUp.delay(100)} style={styles.profileCard}>
            <View style={styles.avatar}>
              <Text style={styles.avatarTextBlue}>S</Text>
            </View>
            <View style={styles.profileDetails}>
              <Text style={styles.username}>SirG47</Text>
              <Text style={styles.email}>h4cker4u@proton.me</Text>
              <View style={styles.selectorDotContainer}>
                <View style={styles.selectorDot} />
              </View>
            </View>
          </Animated.View>
        )}

        {/* Bio Section */}
        <Animated.View entering={FadeInUp.delay(150)} style={styles.section}>
          <Text style={styles.sectionTitle}>Bio</Text>
          {profileMode === 'MY_PROFILE' ? (
            <Text style={styles.bioTextMuted}>No bio provided.</Text>
          ) : (
            <Text style={styles.bioText}>
              SkillChain combines the best of LinkedIn and Upwork — built mobile-native for Solana.
            </Text>
          )}
        </Animated.View>

        {/* Hourly Rate (Only for SirG47 mockup) */}
        {profileMode === 'SIR_G47' && (
          <Animated.View entering={FadeInUp.delay(200)} style={styles.section}>
            <Text style={styles.rateLabel}>Hourly Rate</Text>
            <Text style={styles.rateValue}>$30.0 / hr</Text>
          </Animated.View>
        )}

        {/* Skills Section */}
        <Animated.View entering={FadeInUp.delay(250)} style={styles.section}>
          <Text style={styles.sectionTitle}>Skills</Text>
          {profileMode === 'MY_PROFILE' ? (
            <Text style={styles.bioTextMuted}>No skills added yet.</Text>
          ) : (
            <View style={styles.skillsRow}>
              {skills.map((skill) => (
                <View key={skill} style={styles.skillPill}>
                  <Text style={styles.skillText}>{skill}</Text>
                </View>
              ))}
            </View>
          )}
        </Animated.View>

        {/* Work Experience Section */}
        <Animated.View entering={FadeInUp.delay(300)} style={styles.section}>
          <View style={styles.sectionHeaderWithAdd}>
            <Text style={styles.sectionTitle}>Work Experience</Text>
            {profileMode === 'MY_PROFILE' && (
              <TouchableOpacity style={styles.addBtn}>
                <Ionicons name="add" size={20} color="#1E3A8A" />
              </TouchableOpacity>
            )}
          </View>
          
          {profileMode === 'MY_PROFILE' ? (
            <View style={styles.emptyCard}>
              <Text style={styles.emptyCardText}>No details added yet.</Text>
            </View>
          ) : (
            <View style={styles.experienceCard}>
              <Text style={styles.experienceRole}>Forensic Expert</Text>
              <Text style={styles.experienceCompany}>Interpool</Text>
              <Text style={styles.experienceDates}>Jan 2021 - Present</Text>
            </View>
          )}
        </Animated.View>

        {/* Education Section */}
        <Animated.View entering={FadeInUp.delay(350)} style={styles.section}>
          <View style={styles.sectionHeaderWithAdd}>
            <Text style={styles.sectionTitle}>Education</Text>
            {profileMode === 'MY_PROFILE' && (
              <TouchableOpacity style={styles.addBtn}>
                <Ionicons name="add" size={20} color="#1E3A8A" />
              </TouchableOpacity>
            )}
          </View>

          {profileMode === 'MY_PROFILE' ? (
            <View style={styles.emptyCard}>
              <Text style={styles.emptyCardText}>No details added yet.</Text>
            </View>
          ) : (
            <View style={styles.experienceCard}>
              <Text style={styles.experienceRole}>Harvard</Text>
              <Text style={styles.experienceCompany}>Msc Computer Science</Text>
            </View>
          )}
        </Animated.View>

        {/* Certifications Section */}
        <Animated.View entering={FadeInUp.delay(400)} style={styles.section}>
          <View style={styles.sectionHeaderWithAdd}>
            <Text style={styles.sectionTitle}>Certifications</Text>
            {profileMode === 'MY_PROFILE' && (
              <TouchableOpacity style={styles.addBtn}>
                <Ionicons name="add" size={20} color="#1E3A8A" />
              </TouchableOpacity>
            )}
          </View>

          {profileMode === 'MY_PROFILE' ? (
            <View style={styles.emptyCard}>
              <Text style={styles.emptyCardText}>No details added yet.</Text>
            </View>
          ) : (
            <View style={styles.experienceCard}>
              <Text style={styles.experienceRole}>OSCP</Text>
              <Text style={styles.experienceCompany}>OffSec</Text>
            </View>
          )}
        </Animated.View>

        {/* Bottom Button Action */}
        {profileMode === 'MY_PROFILE' ? (
          <Animated.View entering={FadeInUp.delay(450)} style={styles.buttonContainer}>
            <TouchableOpacity 
              style={styles.actionButton}
              onPress={() => router.push('/wallet-settings')}
            >
              <Text style={styles.actionButtonText}>Wallet Settings</Text>
            </TouchableOpacity>
          </Animated.View>
        ) : (
          <Animated.View entering={FadeInUp.delay(450)} style={styles.buttonContainer}>
            <TouchableOpacity 
              style={styles.actionButton}
              onPress={() => router.push('/chat-detail')}
            >
              <Text style={styles.actionButtonText}>Message SirG47</Text>
            </TouchableOpacity>
          </Animated.View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.background,
  },
  toggleContainer: {
    flexDirection: 'row',
    marginHorizontal: 24,
    marginTop: 64,
    backgroundColor: '#E5E7EB',
    borderRadius: 12,
    padding: 4,
  },
  toggleBtn: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 8,
  },
  toggleBtnActive: {
    backgroundColor: '#FFFFFF',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  toggleBtnText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#4B5563',
  },
  toggleBtnTextActive: {
    color: '#111827',
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 120,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  headerActions: {
    flexDirection: 'row',
    gap: 16,
    alignItems: 'center',
  },
  headerActionBtn: {
    padding: 4,
  },
  title: {
    fontSize: 34,
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
  avatarTextBlue: {
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
  sectionHeaderWithAdd: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  addBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#DCE4F9', // light blue plus badge from mockup
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: '#111827',
  },
  bioText: {
    fontSize: 15,
    color: '#374151',
    lineHeight: 22,
    fontWeight: '500',
  },
  bioTextMuted: {
    fontSize: 15,
    color: '#6B7280',
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
  emptyCard: {
    backgroundColor: '#E5E7EB',
    borderRadius: 16,
    padding: 24,
    alignItems: 'flex-start',
  },
  emptyCardText: {
    fontSize: 15,
    color: '#6B7280',
    fontWeight: '500',
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
  buttonContainer: {
    marginTop: 16,
    marginBottom: 20,
  },
  actionButton: {
    backgroundColor: '#405B8F', // Steel blue color matching mockup bottom button precisely
    borderRadius: 16,
    paddingVertical: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
});
