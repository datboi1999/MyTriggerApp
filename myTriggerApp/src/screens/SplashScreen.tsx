import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../hooks/useAuth';
import { COLORS, SPACING, TYPOGRAPHY, BORDER_RADIUS } from '../theme';

const SplashScreen = () => {
  const navigation = useNavigation<any>();
  const { isAuthenticated, authReady } = useAuth();

  useEffect(() => {
    if (!authReady) {
      return undefined;
    }

    const timeout = setTimeout(() => {
      const nextRoute = isAuthenticated ? 'Main' : 'Login';
      navigation.reset({ index: 0, routes: [{ name: nextRoute }] });
    }, 3000);

    return () => clearTimeout(timeout);
  }, [authReady, isAuthenticated, navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.neuralMesh}>
        <View style={[styles.meshLine, styles.meshLineOne]} />
        <View style={[styles.meshLine, styles.meshLineTwo]} />
        <View style={[styles.meshLine, styles.meshLineThree]} />
        <View style={[styles.meshDot, styles.meshDotOne]} />
        <View style={[styles.meshDot, styles.meshDotTwo]} />
        <View style={[styles.meshDot, styles.meshDotThree]} />
      </View>
      <View style={styles.logoBox}>
        <View style={styles.logoBolt} />
      </View>
      <Text style={styles.title}>TRIGGER</Text>
      <Text style={styles.subtitle}>AI-POWERED GROWTH ENGINE</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  neuralMesh: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'transparent',
  },
  meshLine: {
    position: 'absolute',
    backgroundColor: COLORS.text,
    opacity: 0.08,
    height: 1,
  },
  meshLineOne: {
    top: '18%',
    left: '10%',
    width: '70%',
    transform: [{ rotate: '8deg' }],
  },
  meshLineTwo: {
    top: '32%',
    left: '20%',
    width: '40%',
    transform: [{ rotate: '-12deg' }],
  },
  meshLineThree: {
    top: '60%',
    left: '30%',
    width: '55%',
    transform: [{ rotate: '16deg' }],
  },
  meshDot: {
    position: 'absolute',
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: COLORS.text,
    opacity: 0.16,
  },
  meshDotOne: {
    top: '22%',
    left: '80%',
  },
  meshDotTwo: {
    top: '48%',
    left: '10%',
  },
  meshDotThree: {
    top: '75%',
    left: '65%',
  },
  logoBox: {
    width: 120,
    height: 120,
    backgroundColor: COLORS.primary,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: COLORS.primary,
    shadowOpacity: 0.2,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 10 },
    elevation: 10,
    marginBottom: SPACING.lg,
  },
  logoBolt: {
    width: 0,
    height: 0,
    borderLeftWidth: 16,
    borderRightWidth: 16,
    borderBottomWidth: 32,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: COLORS.text,
    transform: [{ rotate: '20deg' }],
  },
  title: {
    color: COLORS.text,
    fontSize: TYPOGRAPHY.fontSize['3xl'],
    fontWeight: '800',
    letterSpacing: 2,
    marginBottom: SPACING.sm,
  },
  subtitle: {
    color: COLORS.textSecondary,
    fontSize: TYPOGRAPHY.fontSize.sm,
    letterSpacing: 1,
  },
});

export default SplashScreen;
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  neuralMesh: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0.12,
    backgroundColor: 'transparent',
    borderRadius: BORDER_RADIUS.full,
  },
  logoBox: {
    width: 120,
    height: 120,
    backgroundColor: COLORS.primary,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: COLORS.primary,
    shadowOpacity: 0.2,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 10 },
    elevation: 10,
    marginBottom: SPACING.lg,
  },
  logoBolt: {
    width: 0,
    height: 0,
    borderLeftWidth: 16,
    borderRightWidth: 16,
    borderBottomWidth: 32,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: COLORS.text,
    transform: [{ rotate: '20deg' }],
  },
  title: {
    color: COLORS.text,
    fontSize: TYPOGRAPHY.fontSize['3xl'],
    fontWeight: '800',
    letterSpacing: 2,
    marginBottom: SPACING.sm,
  },
  subtitle: {
    color: COLORS.textSecondary,
    fontSize: TYPOGRAPHY.fontSize.sm,
    letterSpacing: 1,
  },
});

export default SplashScreen;
