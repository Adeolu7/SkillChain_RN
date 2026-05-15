import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Theme } from '@/constants/Theme';
import { useRouter } from 'expo-router';
import Animated, { FadeInUp, FadeInDown } from 'react-native-reanimated';

const { width } = Dimensions.get('window');

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[Theme.colors.background, '#1E293B', Theme.colors.background]}
        style={StyleSheet.absoluteFill}
      />
      
      <View style={styles.content}>
        <Animated.View entering={FadeInUp.delay(200).duration(1000)} style={styles.logoContainer}>
          <View style={styles.logoCircle}>
            <LinearGradient
              colors={[Theme.colors.primary, Theme.colors.secondary]}
              style={styles.logoGradient}
            >
              <Text style={styles.logoText}>S</Text>
            </LinearGradient>
          </View>
          <Text style={styles.title}>Skillchain</Text>
          <Text style={styles.subtitle}>Verify your expertise on-chain.</Text>
        </Animated.View>

        <Animated.View entering={FadeInDown.delay(400).duration(1000)} style={styles.buttonContainer}>
          <TouchableOpacity 
            style={styles.primaryButton}
            onPress={() => router.push('/(auth)/signup')}
          >
            <LinearGradient
              colors={[Theme.colors.primary, Theme.colors.secondary]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.buttonGradient}
            >
              <Text style={styles.buttonText}>Get Started</Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.secondaryButton}
            onPress={() => router.push('/(auth)/login')}
          >
            <Text style={styles.secondaryButtonText}>Already have an account? Log in</Text>
          </TouchableOpacity>
        </Animated.View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Powered by Solana</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: Theme.spacing.xl,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 100,
  },
  logoCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: 'hidden',
    marginBottom: Theme.spacing.lg,
    elevation: 10,
    shadowColor: Theme.colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
  logoGradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 48,
    fontWeight: '900',
    color: 'white',
  },
  title: {
    fontSize: 42,
    fontWeight: '800',
    color: Theme.colors.text,
    letterSpacing: -1,
  },
  subtitle: {
    fontSize: 18,
    color: Theme.colors.textMuted,
    marginTop: Theme.spacing.sm,
    textAlign: 'center',
  },
  buttonContainer: {
    width: '100%',
    gap: Theme.spacing.md,
    marginBottom: 40,
  },
  primaryButton: {
    width: '100%',
    height: 56,
    borderRadius: Theme.borderRadius.lg,
    overflow: 'hidden',
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
  secondaryButton: {
    width: '100%',
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
  },
  secondaryButtonText: {
    color: Theme.colors.primary,
    fontSize: 16,
    fontWeight: '600',
  },
  footer: {
    marginBottom: Theme.spacing.md,
  },
  footerText: {
    color: Theme.colors.textMuted,
    fontSize: 12,
    textTransform: 'uppercase',
    letterSpacing: 2,
  },
});

