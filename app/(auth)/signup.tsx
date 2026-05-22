import { supabase } from '@/constants/Supabase';
import { Alert, ActivityIndicator } from 'react-native';

export default function SignupScreen() {
  const router = useRouter();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [walletAddress, setWalletAddress] = useState('');
  const [loading, setLoading] = useState(false);

  const connectMockWallet = () => {
    const chars = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
    const mockAddr = '5YNZ' + Array.from({ length: 36 }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
    setWalletAddress(mockAddr);
    Alert.alert('Solana Wallet Connected', `Mock address successfully connected:\n${mockAddr}`);
  };

  const handleSignup = async () => {
    if (!email || !password || !fullName) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }
    setLoading(true);
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
            solana_address: walletAddress || null,
          }
        }
      });
      
      if (error) {
        Alert.alert('Sign Up Error', error.message);
      } else {
        // Auth state changes will automatically route the user
        Alert.alert('Success', 'Check your email for confirmation if required!');
      }
    } catch (e: any) {
      Alert.alert('Error', e.message || 'An unexpected error occurred.');
    } finally {
      setLoading(false);
    }
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

            <TouchableOpacity 
              style={[
                styles.walletButton, 
                walletAddress ? { borderColor: '#10B981', backgroundColor: '#ECFDF5' } : null
              ]}
              onPress={connectMockWallet}
            >
              <Ionicons 
                name={walletAddress ? "checkmark-circle" : "wallet"} 
                size={20} 
                color={walletAddress ? '#10B981' : Theme.colors.text} 
                style={styles.walletIcon} 
              />
              <Text style={[styles.walletButtonText, walletAddress ? { color: '#10B981' } : null]}>
                {walletAddress 
                  ? `Connected: ${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}`
                  : "Connect Solana Wallet"
                }
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.bottomSection}>
            <TouchableOpacity 
              style={styles.submitButton}
              onPress={handleSignup}
              disabled={loading}
            >
              {loading ? (
                <ActivityIndicator size="small" color="#4B5563" />
              ) : (
                <Text style={styles.submitButtonText}>Complete Sign Up</Text>
              )}
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.loginRedirect}
              onPress={() => router.push('/(auth)/login')}
              disabled={loading}
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
