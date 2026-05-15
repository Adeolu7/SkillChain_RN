import React from 'react';
import { StyleSheet, TextInput, TextInputProps, View, Text } from 'react-native';
import { Theme } from '@/constants/Theme';

interface Props extends TextInputProps {
  label?: string;
  error?: string;
}

export function StyledInput({ label, error, ...props }: Props) {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={[styles.input, error ? styles.inputError : null]}
        placeholderTextColor={Theme.colors.textMuted}
        {...props}
      />
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: Theme.spacing.md,
  },
  label: {
    color: Theme.colors.text,
    fontSize: 14,
    fontWeight: '600',
    marginBottom: Theme.spacing.xs,
    marginLeft: 4,
  },
  input: {
    backgroundColor: Theme.colors.surface,
    color: Theme.colors.text,
    paddingHorizontal: Theme.spacing.md,
    paddingVertical: Theme.spacing.md,
    borderRadius: Theme.borderRadius.md,
    fontSize: 16,
    borderWidth: 1,
    borderColor: Theme.colors.border,
  },
  inputError: {
    borderColor: Theme.colors.error,
  },
  errorText: {
    color: Theme.colors.error,
    fontSize: 12,
    marginTop: 4,
    marginLeft: 4,
  },
});
