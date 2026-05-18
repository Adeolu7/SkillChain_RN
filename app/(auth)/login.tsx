import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { Theme } from '@/constants/Theme';
import { useRouter } from 'expo-router';
import { StyledInput } from '@/components/StyledInput';
import { Ionicons } from '@expo/vector-icons';
import Animated, { FadeInUp } from 'react-native-reanimated';

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Navigate straight to tabs home/feed
    router.replace('/(tabs)');
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContent} bounces={false}>
        <Animated.View entering={FadeInUp.duration(600)} style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>Login</Text>
            <Text style={styles.subtitle}>Welcome back to SkillChain</Text>
          </View>

          <View style={styles.form}>
            <StyledInput
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <StyledInput
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />

            <TouchableOpacity style={styles.forgotPassword}>
              <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.submitButton}
              onPress={handleLogin}
            >
              <Text style={styles.submitButtonText}>Login</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.bottomSection}>
            <TouchableOpacity 
              style={styles.signupRedirect}
              onPress={() => router.push('/(auth)/signup')}
            >
              <View style={styles.signupRedirectContainer}>
                <Text style={styles.signupRedirectText}>
                  Don't have an account? <Text style={styles.signupRedirectTextBold}>Sign Up</Text>
                </Text>
                <Ionicons name="chevron-forward" size={16} color={Theme.colors.text} style={styles.chevron} />
              </View>
            </TouchableOpacity>
          </View>
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
  scrollContent: {
    flexGrow: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 100,
    paddingBottom: 40,
    justifyContent: 'space-between',
  },
  header: {
    marginBottom: 40,
  },
  title: {
    fontSize: 40,
    fontWeight: '800',
    color: Theme.colors.text,
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 16,
    color: Theme.colors.textMuted,
    marginTop: 8,
    fontWeight: '500',
  },
  form: {
    flex: 1,
    justifyContent: 'flex-start',
    gap: 4,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    paddingVertical: 8,
    marginBottom: 20,
  },
  forgotPasswordText: {
    color: '#111827',
    fontSize: 14,
    fontWeight: '700',
  },
  submitButton: {
    width: '100%',
    backgroundColor: '#E5E7EB', // matching screenshots' clean button background
    borderRadius: 16,
    paddingVertical: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitButtonText: {
    color: '#4B5563', // dark text matching screenshot style
    fontSize: 16,
    fontWeight: '700',
  },
  bottomSection: {
    marginTop: 40,
    alignItems: 'center',
  },
  signupRedirect: {
    paddingVertical: 8,
  },
  signupRedirectContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  signupRedirectText: {
    color: Theme.colors.textMuted,
    fontSize: 15,
    fontWeight: '500',
  },
  signupRedirectTextBold: {
    color: Theme.colors.text,
    fontWeight: '700',
  },
  chevron: {
    marginLeft: 6,
    marginTop: 1,
  },
});
