import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../hooks/useAuth';
import { COLORS, SPACING, TYPOGRAPHY, BORDER_RADIUS } from '../theme';

const LoginScreen = () => {
  const { login } = useAuth();
  const navigation = useNavigation<any>();

  const handleLogin = () => {
    login();
    navigation.reset({ index: 0, routes: [{ name: 'Main' }] });
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <View style={styles.logoBolt} />
      </View>
      <Text style={styles.title}>Welcome back</Text>
      <Text style={styles.subtitle}>Sign in to continue to your creator growth dashboard.</Text>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Continue securely</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.background,
    paddingHorizontal: SPACING.lg,
  },
  logoBox: {
    width: 96,
    height: 96,
    backgroundColor: COLORS.primary,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: SPACING.lg,
  },
  logoBolt: {
    width: 0,
    height: 0,
    borderLeftWidth: 12,
    borderRightWidth: 12,
    borderBottomWidth: 24,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: COLORS.text,
    transform: [{ rotate: '20deg' }],
  },
  title: {
    color: COLORS.text,
    fontSize: TYPOGRAPHY.fontSize['2xl'],
    fontWeight: '700',
    marginBottom: SPACING.sm,
  },
  subtitle: {
    color: COLORS.textSecondary,
    fontSize: TYPOGRAPHY.fontSize.md,
    textAlign: 'center',
    marginBottom: SPACING['2xl'],
    lineHeight: 22,
  },
  button: {
    backgroundColor: COLORS.primary,
    paddingVertical: SPACING.md,
    paddingHorizontal: SPACING.xl,
    borderRadius: BORDER_RADIUS.lg,
  },
  buttonText: {
    color: COLORS.text,
    fontSize: TYPOGRAPHY.fontSize.md,
    fontWeight: '700',
  },
});

export default LoginScreen;
