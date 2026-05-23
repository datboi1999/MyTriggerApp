import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { COLORS, SPACING, TYPOGRAPHY } from '../theme';

const { width } = Dimensions.get('window');

const AnalyticsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Analytics</Text>
        <Text style={styles.subtitle}>Track your performance metrics</Text>
      </View>

      <View style={styles.timeFilterContainer}>
        {['Week', 'Month', 'Year'].map((period) => (
          <TouchableOpacity key={period} style={styles.filterButton}>
            <Text
              style={[
                styles.filterButtonText,
                period === 'Month' && styles.filterButtonTextActive,
              ]}
            >
              {period}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.metricsGrid}>
        <View style={styles.metricCard}>
          <Text style={styles.metricLabel}>Total Reach</Text>
          <Text style={styles.metricValue}>24.5K</Text>
          <Text style={styles.metricChange}>+12.5%</Text>
        </View>

        <View style={styles.metricCard}>
          <Text style={styles.metricLabel}>Engagement</Text>
          <Text style={styles.metricValue}>3.2K</Text>
          <Text style={styles.metricChange}>+8.3%</Text>
        </View>
      </View>

      <View style={styles.metricsGrid}>
        <View style={styles.metricCard}>
          <Text style={styles.metricLabel}>Avg Views</Text>
          <Text style={styles.metricValue}>1.2K</Text>
          <Text style={styles.metricChange}>+5.2%</Text>
        </View>

        <View style={styles.metricCard}>
          <Text style={styles.metricLabel}>Conversions</Text>
          <Text style={styles.metricValue}>156</Text>
          <Text style={styles.metricChange}>+18.7%</Text>
        </View>
      </View>

      <View style={styles.chartCard}>
        <Text style={styles.chartTitle}>Growth Trend</Text>
        <View style={styles.chartPlaceholder}>
          <Text style={styles.chartPlaceholderText}>Chart visualization coming soon</Text>
        </View>
      </View>

      <View style={styles.chartCard}>
        <Text style={styles.chartTitle}>Audience Demographics</Text>
        <View style={styles.demographicsContainer}>
          {['Male', 'Female', 'Other'].map((demo, idx) => (
            <View key={idx} style={styles.demoItem}>
              <View style={styles.demoBar}>
                <View
                  style={[
                    styles.demoFill,
                    { width: `${[45, 40, 15][idx]}%` },
                  ]}
                />
              </View>
              <Text style={styles.demoLabel}>{demo}</Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const { TouchableOpacity } = require('react-native');

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
  timeFilterContainer: {
    flexDirection: 'row',
    gap: SPACING.sm,
    marginBottom: SPACING.lg,
  },
  filterButton: {
    flex: 1,
    paddingVertical: SPACING.sm,
    paddingHorizontal: SPACING.md,
    borderRadius: 8,
    backgroundColor: COLORS.surface,
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: COLORS.border,
  },
  filterButtonText: {
    fontSize: TYPOGRAPHY.fontSize.sm,
    fontWeight: '500',
    color: COLORS.textTertiary,
  },
  filterButtonTextActive: {
    color: COLORS.primary,
    borderColor: COLORS.primary,
  },
  metricsGrid: {
    flexDirection: 'row',
    gap: SPACING.md,
    marginBottom: SPACING.md,
  },
  metricCard: {
    flex: 1,
    backgroundColor: COLORS.surface,
    borderRadius: 12,
    padding: SPACING.md,
    borderLeftWidth: 4,
    borderLeftColor: COLORS.primary,
  },
  metricLabel: {
    fontSize: TYPOGRAPHY.fontSize.sm,
    color: COLORS.textSecondary,
    marginBottom: SPACING.xs,
  },
  metricValue: {
    fontSize: TYPOGRAPHY.fontSize['2xl'],
    fontWeight: '700',
    color: COLORS.text,
    marginBottom: SPACING.xs,
  },
  metricChange: {
    fontSize: TYPOGRAPHY.fontSize.sm,
    fontWeight: '600',
    color: COLORS.success,
  },
  chartCard: {
    backgroundColor: COLORS.surface,
    borderRadius: 12,
    padding: SPACING.md,
    marginBottom: SPACING.md,
  },
  chartTitle: {
    fontSize: TYPOGRAPHY.fontSize.lg,
    fontWeight: '600',
    color: COLORS.text,
    marginBottom: SPACING.md,
  },
  chartPlaceholder: {
    height: 200,
    backgroundColor: COLORS.background,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.border,
    borderStyle: 'dashed',
  },
  chartPlaceholderText: {
    color: COLORS.textTertiary,
    fontSize: TYPOGRAPHY.fontSize.sm,
  },
  demographicsContainer: {
    gap: SPACING.md,
  },
  demoItem: {
    gap: SPACING.sm,
  },
  demoBar: {
    height: 12,
    backgroundColor: COLORS.background,
    borderRadius: 6,
    overflow: 'hidden',
  },
  demoFill: {
    height: '100%',
    backgroundColor: COLORS.primary,
  },
  demoLabel: {
    fontSize: TYPOGRAPHY.fontSize.sm,
    color: COLORS.textSecondary,
  },
});

export default AnalyticsScreen;
