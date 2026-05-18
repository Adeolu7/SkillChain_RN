import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { Theme } from '@/constants/Theme';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import Animated, { FadeInUp } from 'react-native-reanimated';

export default function PostJobScreen() {
  const router = useRouter();
  const [operationMode, setOperationMode] = useState('REMOTE');
  const [contractType, setContractType] = useState('FULL TIME');

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#111827" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Post a Job</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <Animated.View entering={FadeInUp.duration(600)} style={styles.form}>
          {/* Job Title */}
          <TextInput 
            style={styles.input} 
            placeholder="Job Title"
            placeholderTextColor="#9CA3AF"
          />

          {/* Job Description */}
          <TextInput 
            style={[styles.input, styles.textArea]} 
            placeholder="Job Description"
            placeholderTextColor="#9CA3AF"
            multiline
            numberOfLines={4}
          />

          {/* Salary and Currency row */}
          <View style={styles.row}>
            <TextInput 
              style={[styles.input, styles.halfInput]} 
              placeholder="Salary"
              placeholderTextColor="#9CA3AF"
              keyboardType="numeric"
            />
            <View style={styles.dropdown}>
              <Text style={styles.dropdownText}>USD</Text>
            </View>
          </View>

          {/* Salary Scale */}
          <TextInput 
            style={styles.input} 
            placeholder="Salary Scale: per month"
            placeholderTextColor="#9CA3AF"
          />

          {/* Operation Mode */}
          <View style={styles.section}>
            <Text style={styles.sectionLabel}>Operation Mode</Text>
            <View style={styles.pillsRow}>
              {['REMOTE', 'ONSITE', 'HYBRID'].map((mode) => {
                const isActive = mode === operationMode;
                return (
                  <TouchableOpacity
                    key={mode}
                    style={[styles.pill, isActive ? styles.pillActive : styles.pillInactive]}
                    onPress={() => setOperationMode(mode)}
                  >
                    <Text style={[styles.pillText, isActive ? styles.pillTextActive : styles.pillTextInactive]}>
                      {mode}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>

          {/* Contract Type */}
          <View style={styles.section}>
            <Text style={styles.sectionLabel}>Contract Type</Text>
            <View style={styles.pillsRow}>
              {['FULL TIME', 'CONTRACT'].map((type) => {
                const isActive = type === contractType;
                return (
                  <TouchableOpacity
                    key={type}
                    style={[styles.pill, isActive ? styles.pillActive : styles.pillInactive]}
                    onPress={() => setContractType(type)}
                  >
                    <Text style={[styles.pillText, isActive ? styles.pillTextActive : styles.pillTextInactive]}>
                      {type}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>

          {/* Application URL */}
          <TextInput 
            style={styles.input} 
            placeholder="Application URL (External link)"
            placeholderTextColor="#9CA3AF"
            keyboardType="url"
            autoCapitalize="none"
          />

          {/* Submit Button */}
          <TouchableOpacity style={styles.submitButton} onPress={() => router.back()}>
            <Text style={styles.submitButtonText}>Publish Job</Text>
          </TouchableOpacity>
        </Animated.View>
      </ScrollView>
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
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 64,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  backButton: {
    marginRight: 16,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: '#111827',
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 60,
  },
  form: {
    gap: 16,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#9CA3AF',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    color: '#111827',
    fontWeight: '500',
  },
  textArea: {
    height: 120,
    textAlignVertical: 'top',
  },
  row: {
    flexDirection: 'row',
    gap: 16,
  },
  halfInput: {
    flex: 1,
  },
  dropdown: {
    width: 120,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#9CA3AF',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dropdownText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
  },
  section: {
    marginTop: 8,
  },
  sectionLabel: {
    fontSize: 14,
    fontWeight: '700',
    color: '#4B5563',
    marginBottom: 8,
  },
  pillsRow: {
    flexDirection: 'row',
    gap: 8,
  },
  pill: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pillActive: {
    backgroundColor: '#DCE4F9', // active light blue from mockup 3
    borderColor: '#9CA3AF',
  },
  pillInactive: {
    backgroundColor: '#FFFFFF',
    borderColor: '#9CA3AF',
  },
  pillText: {
    fontSize: 12,
    fontWeight: '700',
  },
  pillTextActive: {
    color: '#1E3A8A',
  },
  pillTextInactive: {
    color: '#4B5563',
  },
  submitButton: {
    backgroundColor: '#405B8F',
    borderRadius: 8,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
  },
  submitButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
});
