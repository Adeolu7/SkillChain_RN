import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { Theme } from '@/constants/Theme';
import { useRouter } from 'expo-router';
import { StyledInput } from '@/components/StyledInput';
import { Ionicons } from '@expo/vector-icons';
import Animated, { FadeInUp } from 'react-native-reanimated';

export default function SignupScreen() {
  const router = useRouter();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    // Navigate directly to standard tabs Dashboard
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
            <Text style={styles.title}>Create Account</Text>
            <Text style={styles.subtitle}>Join the SkillChain network</Text>
          </View>

          <View style={styles.form}>
            <StyledInput
              placeholder="Full Name"
              value={fullName}
              onChangeText={setFullName}
            />
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

            <TouchableOpacity style={styles.walletButton}>
              <Ionicons name="wallet" size={20} color={Theme.colors.text} style={styles.walletIcon} />
              <Text style={styles.walletButtonText}>Connect Solana Wallet</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.bottomSection}>
            <TouchableOpacity 
              style={styles.submitButton}
              onPress={handleSignup}
            >
              <Text style={styles.submitButtonText}>Complete Sign Up</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.loginRedirect}
              onPress={() => router.push('/(auth)/login')}
            >
              <Text style={styles.loginRedirectText}>
                Already have an account? <Text style={styles.loginRedirectTextBold}>Login</Text>
              </Text>
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
    paddingTop: 80,
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
  walletButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Theme.colors.surface,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 16,
    paddingVertical: 18,
    marginTop: 12,
  },
  walletIcon: {
    marginRight: 10,
  },
  walletButtonText: {
    color: Theme.colors.text,
    fontSize: 15,
    fontWeight: '600',
  },
  bottomSection: {
    marginTop: 40,
    gap: 16,
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
  loginRedirect: {
    alignItems: 'center',
    paddingVertical: 8,
  },
  loginRedirectText: {
    color: Theme.colors.textMuted,
    fontSize: 14,
    fontWeight: '500',
  },
  loginRedirectTextBold: {
    color: Theme.colors.text,
    fontWeight: '700',
  },
});
