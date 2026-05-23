import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Switch } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS, SPACING, TYPOGRAPHY } from '../theme';

const SettingsScreen = () => {
  const [notifications, setNotifications] = React.useState(true);
  const [darkMode, setDarkMode] = React.useState(true);
  const [analytics, setAnalytics] = React.useState(true);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Settings</Text>
        <Text style={styles.subtitle}>Manage your preferences</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Account</Text>
        <TouchableOpacity style={styles.settingItem}>
          <View style={styles.settingLeft}>
            <MaterialCommunityIcons name="account-circle" size={24} color={COLORS.primary} />
            <View style={styles.settingTextContainer}>
              <Text style={styles.settingLabel}>Profile</Text>
              <Text style={styles.settingValue}>Manage your profile</Text>
            </View>
          </View>
          <MaterialCommunityIcons name="chevron-right" size={24} color={COLORS.textTertiary} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingItem}>
          <View style={styles.settingLeft}>
            <MaterialCommunityIcons name="lock" size={24} color={COLORS.primary} />
            <View style={styles.settingTextContainer}>
              <Text style={styles.settingLabel}>Password</Text>
              <Text style={styles.settingValue}>Change your password</Text>
            </View>
          </View>
          <MaterialCommunityIcons name="chevron-right" size={24} color={COLORS.textTertiary} />
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Preferences</Text>

        <View style={styles.settingItem}>
          <View style={styles.settingLeft}>
            <MaterialCommunityIcons name="bell" size={24} color={COLORS.primary} />
            <View style={styles.settingTextContainer}>
              <Text style={styles.settingLabel}>Notifications</Text>
              <Text style={styles.settingValue}>Receive app notifications</Text>
            </View>
          </View>
          <Switch
            value={notifications}
            onValueChange={setNotifications}
            trackColor={{ false: COLORS.border, true: COLORS.primary }}
            thumbColor={notifications ? COLORS.primary : COLORS.textTertiary}
          />
        </View>

        <View style={styles.settingItem}>
          <View style={styles.settingLeft}>
            <MaterialCommunityIcons name="moon-waning-crescent" size={24} color={COLORS.primary} />
            <View style={styles.settingTextContainer}>
              <Text style={styles.settingLabel}>Dark Mode</Text>
              <Text style={styles.settingValue}>Always enabled</Text>
            </View>
          </View>
          <Switch
            value={darkMode}
            onValueChange={setDarkMode}
            trackColor={{ false: COLORS.border, true: COLORS.primary }}
            thumbColor={darkMode ? COLORS.primary : COLORS.textTertiary}
            disabled={true}
          />
        </View>

        <View style={styles.settingItem}>
          <View style={styles.settingLeft}>
            <MaterialCommunityIcons name="chart-box" size={24} color={COLORS.primary} />
            <View style={styles.settingTextContainer}>
              <Text style={styles.settingLabel}>Analytics</Text>
              <Text style={styles.settingValue}>Share usage analytics</Text>
            </View>
          </View>
          <Switch
            value={analytics}
            onValueChange={setAnalytics}
            trackColor={{ false: COLORS.border, true: COLORS.primary }}
            thumbColor={analytics ? COLORS.primary : COLORS.textTertiary}
          />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Support</Text>
        <TouchableOpacity style={styles.settingItem}>
          <View style={styles.settingLeft}>
            <MaterialCommunityIcons name="help-circle" size={24} color={COLORS.primary} />
            <View style={styles.settingTextContainer}>
              <Text style={styles.settingLabel}>Help & Support</Text>
              <Text style={styles.settingValue}>Get help or report issues</Text>
            </View>
          </View>
          <MaterialCommunityIcons name="chevron-right" size={24} color={COLORS.textTertiary} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingItem}>
          <View style={styles.settingLeft}>
            <MaterialCommunityIcons name="file-document" size={24} color={COLORS.primary} />
            <View style={styles.settingTextContainer}>
              <Text style={styles.settingLabel}>Terms & Privacy</Text>
              <Text style={styles.settingValue}>Review our policies</Text>
            </View>
          </View>
          <MaterialCommunityIcons name="chevron-right" size={24} color={COLORS.textTertiary} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.logoutButton}>
        <MaterialCommunityIcons name="logout" size={20} color={COLORS.error} />
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text style={styles.versionText}>TRIGGER v1.0.0</Text>
        <Text style={styles.copyrightText}>© 2024 TRIGGER. All rights reserved.</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingHorizontal: SPACING.md,
    paddingTop: SPACING.lg,
  },
  header: {
    marginBottom: SPACING.lg,
  },
  title: {
    fontSize: TYPOGRAPHY.fontSize['2xl'],
    fontWeight: '700',
    color: COLORS.text,
    marginBottom: SPACING.xs,
  },
  subtitle: {
    fontSize: TYPOGRAPHY.fontSize.md,
    color: COLORS.textSecondary,
  },
  section: {
    marginBottom: SPACING.lg,
  },
  sectionTitle: {
    fontSize: TYPOGRAPHY.fontSize.sm,
    fontWeight: '700',
    color: COLORS.textTertiary,
    textTransform: 'uppercase',
    marginBottom: SPACING.md,
    letterSpacing: 0.5,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.surface,
    borderRadius: 12,
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.md,
    marginBottom: SPACING.sm,
    borderLeftWidth: 4,
    borderLeftColor: COLORS.primary,
  },
  settingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    gap: SPACING.md,
  },
  settingTextContainer: {
    flex: 1,
  },
  settingLabel: {
    fontSize: TYPOGRAPHY.fontSize.md,
    fontWeight: '600',
    color: COLORS.text,
    marginBottom: 2,
  },
  settingValue: {
    fontSize: TYPOGRAPHY.fontSize.sm,
    color: COLORS.textTertiary,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.surface,
    borderRadius: 12,
    paddingVertical: SPACING.md,
    marginBottom: SPACING.lg,
    borderWidth: 1.5,
    borderColor: COLORS.error,
    gap: SPACING.sm,
  },
  logoutText: {
    fontSize: TYPOGRAPHY.fontSize.md,
    fontWeight: '600',
    color: COLORS.error,
  },
  footer: {
    alignItems: 'center',
    paddingVertical: SPACING.lg,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
  },
  versionText: {
    fontSize: TYPOGRAPHY.fontSize.sm,
    fontWeight: '600',
    color: COLORS.textSecondary,
    marginBottom: SPACING.xs,
  },
  copyrightText: {
    fontSize: TYPOGRAPHY.fontSize.xs,
    color: COLORS.textTertiary,
  },
});

export default SettingsScreen;
