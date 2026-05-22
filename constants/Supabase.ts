import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://vxcsynseoynjadkxoqib.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ4Y3N5bnNlb3luamFka3hvcWliIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkzNDExODQsImV4cCI6MjA5NDkxNzE4NH0.nchA42AMreFLbK-Kl6wWZC2y1VSSNUS0KvDpHeKNPnU';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
