import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useAuth } from '../hooks/useAuth';
import { COLORS, SPACING, TYPOGRAPHY, BORDER_RADIUS } from '../theme';

type AuthGuardProps = {
  children: React.ReactNode;
  feature: string;
};

const AuthGuard = ({ children, feature }: AuthGuardProps) => {
  const { isAuthenticated, login } = useAuth();

  if (isAuthenticated) {
    return <>{children}</>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Access restricted</Text>
      <Text style={styles.message}>
        You must be signed in to access the {feature} tab.
      </Text>
      <TouchableOpacity style={styles.button} onPress={login}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
      <Text style={styles.hint}>
        This guard is prepared for protected route flow and can be connected to your auth screens.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: SPACING.lg,
    backgroundColor: COLORS.background,
  },
  title: {
    fontSize: TYPOGRAPHY.fontSize['2xl'],
    fontWeight: '700',
    color: COLORS.text,
    marginBottom: SPACING.sm,
  },
  message: {
    fontSize: TYPOGRAPHY.fontSize.md,
    color: COLORS.textSecondary,
    textAlign: 'center',
    marginBottom: SPACING.lg,
    lineHeight: 22,
  },
  button: {
    backgroundColor: COLORS.primary,
    borderRadius: BORDER_RADIUS.md,
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.sm,
  },
  buttonText: {
    color: COLORS.text,
    fontSize: TYPOGRAPHY.fontSize.md,
    fontWeight: '600',
  },
  hint: {
    marginTop: SPACING.md,
    color: COLORS.textTertiary,
    fontSize: TYPOGRAPHY.fontSize.sm,
    textAlign: 'center',
  },
});

export default AuthGuard;
