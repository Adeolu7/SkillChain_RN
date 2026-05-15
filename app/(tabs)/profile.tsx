import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Theme } from '@/constants/Theme';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: Theme.colors.text,
    fontSize: 20,
    fontWeight: '700',
  },
});
