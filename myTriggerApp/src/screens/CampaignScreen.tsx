import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS, SPACING, TYPOGRAPHY } from '../theme';

const CampaignScreen = () => {
  const [campaigns] = useState([
    {
      id: 1,
      name: 'Summer Promo 2024',
      status: 'active',
      progress: 75,
    },
    {
      id: 2,
      name: 'Brand Partnership',
      status: 'scheduled',
      progress: 30,
    },
    {
      id: 3,
      name: 'Community Challenge',
      status: 'completed',
      progress: 100,
    },
  ]);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Campaigns</Text>
        <Text style={styles.subtitle}>Manage your creator campaigns</Text>
      </View>

      <TouchableOpacity style={styles.createButton}>
        <MaterialCommunityIcons name="plus-circle" size={24} color={COLORS.text} />
        <Text style={styles.createButtonText}>New Campaign</Text>
      </TouchableOpacity>

      <View style={styles.campaignsList}>
        {campaigns.map((campaign) => (
          <View key={campaign.id} style={styles.campaignCard}>
            <View style={styles.campaignHeader}>
              <Text style={styles.campaignName}>{campaign.name}</Text>
              <View
                style={[
                  styles.statusBadge,
                  {
                    backgroundColor:
                      campaign.status === 'active'
                        ? COLORS.success
                        : campaign.status === 'scheduled'
                        ? COLORS.warning
                        : COLORS.textTertiary,
                  },
                ]}
              >
                <Text style={styles.statusText}>
                  {campaign.status.charAt(0).toUpperCase() + campaign.status.slice(1)}
                </Text>
              </View>
            </View>

            <View style={styles.progressContainer}>
              <View style={styles.progressBar}>
                <View
                  style={[styles.progressFill, { width: `${campaign.progress}%` }]}
                />
              </View>
              <Text style={styles.progressText}>{campaign.progress}%</Text>
            </View>
          </View>
        ))}
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
  createButton: {
    flexDirection: 'row',
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    padding: SPACING.md,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: SPACING.lg,
  },
  createButtonText: {
    marginLeft: SPACING.sm,
    fontSize: TYPOGRAPHY.fontSize.md,
    fontWeight: '600',
    color: COLORS.text,
  },
  campaignsList: {
    gap: SPACING.md,
    paddingBottom: SPACING.lg,
  },
  campaignCard: {
    backgroundColor: COLORS.surface,
    borderRadius: 12,
    padding: SPACING.md,
    borderLeftWidth: 4,
    borderLeftColor: COLORS.primary,
  },
  campaignHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACING.md,
  },
  campaignName: {
    fontSize: TYPOGRAPHY.fontSize.lg,
    fontWeight: '600',
    color: COLORS.text,
    flex: 1,
  },
  statusBadge: {
    paddingHorizontal: SPACING.sm,
    paddingVertical: 4,
    borderRadius: 6,
  },
  statusText: {
    fontSize: TYPOGRAPHY.fontSize.xs,
    fontWeight: '600',
    color: COLORS.text,
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.sm,
  },
  progressBar: {
    flex: 1,
    height: 6,
    backgroundColor: COLORS.border,
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: COLORS.primary,
  },
  progressText: {
    fontSize: TYPOGRAPHY.fontSize.sm,
    fontWeight: '600',
    color: COLORS.textSecondary,
    minWidth: 35,
  },
});

export default CampaignScreen;
