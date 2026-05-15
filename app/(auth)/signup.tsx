import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Theme } from '@/constants/Theme';
import { useRouter } from 'expo-router';
import { StyledInput } from '@/components/StyledInput';
import Animated, { FadeIn } from 'react-native-reanimated';

export default function SignupScreen() {
  const router = useRouter();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    // Logic for signup will go here
    console.log('Signup pressed');
    router.replace('/(tabs)');
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <LinearGradient
        colors={[Theme.colors.background, '#1E293B']}
        style={StyleSheet.absoluteFill}
      />
      
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Animated.View entering={FadeIn.duration(800)} style={styles.header}>
          <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
            <Text style={styles.backButtonText}>←</Text>
          </TouchableOpacity>
          <Text style={styles.title}>Create Account</Text>
          <Text style={styles.subtitle}>Join the network of verified experts</Text>
        </Animated.View>

        <View style={styles.form}>
          <StyledInput
            label="Full Name"
            placeholder="John Doe"
            value={fullName}
            onChangeText={setFullName}
          />
          <StyledInput
            label="Email Address"
            placeholder="example@skillchain.com"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <StyledInput
            label="Password"
            placeholder="Minimum 8 characters"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <View style={styles.termsContainer}>
            <Text style={styles.termsText}>
              By signing up, you agree to our{' '}
              <Text style={styles.linkTextInline}>Terms of Service</Text> and{' '}
              <Text style={styles.linkTextInline}>Privacy Policy</Text>
            </Text>
          </View>

          <TouchableOpacity 
            style={styles.signupButton}
            onPress={handleSignup}
          >
            <LinearGradient
              colors={[Theme.colors.primary, Theme.colors.secondary]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.buttonGradient}
            >
              <Text style={styles.buttonText}>Sign Up</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Already have an account? </Text>
          <TouchableOpacity onPress={() => router.push('/(auth)/login')}>
            <Text style={styles.linkText}>Log In</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    padding: Theme.spacing.xl,
    justifyContent: 'center',
  },
  header: {
    marginBottom: Theme.spacing.xl,
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    marginBottom: Theme.spacing.md,
  },
  backButtonText: {
    color: Theme.colors.text,
    fontSize: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    color: Theme.colors.text,
  },
  subtitle: {
    fontSize: 16,
    color: Theme.colors.textMuted,
    marginTop: Theme.spacing.xs,
  },
  form: {
    width: '100%',
    gap: Theme.spacing.sm,
  },
  termsContainer: {
    marginVertical: Theme.spacing.md,
    paddingHorizontal: 4,
  },
  termsText: {
    color: Theme.colors.textMuted,
    fontSize: 13,
    lineHeight: 18,
  },
  linkTextInline: {
    color: Theme.colors.primary,
    fontWeight: '600',
  },
  signupButton: {
    width: '100%',
    height: 56,
    borderRadius: Theme.borderRadius.lg,
    overflow: 'hidden',
    marginTop: Theme.spacing.sm,
  },
  buttonGradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: Theme.spacing.xl,
  },
  footerText: {
    color: Theme.colors.textMuted,
    fontSize: 15,
  },
  linkText: {
    color: Theme.colors.primary,
    fontSize: 15,
    fontWeight: '700',
  },
});
