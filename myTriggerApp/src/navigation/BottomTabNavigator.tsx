import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { COLORS, SPACING } from '../theme';
import HomeScreen from '../screens/HomeScreen';
import CampaignScreen from '../screens/CampaignScreen';
import AnalyticsScreen from '../screens/AnalyticsScreen';
import SettingsScreen from '../screens/SettingsScreen';
import AuthGuard from '../components/AuthGuard';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.textTertiary,
        tabBarLabelStyle: styles.tabBarLabel,
        tabBarIconStyle: styles.tabBarIcon,
        tabBarItemStyle: styles.tabBarItem,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="home-outline"
              size={size}
              color={color}
              style={styles.icon}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Campaign"
        options={{
          title: 'Campaign',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="bullhorn-outline"
              size={size}
              color={color}
              style={styles.icon}
            />
          ),
        }}
      >
        {() => (
          <AuthGuard feature="Campaign">
            <CampaignScreen />
          </AuthGuard>
        )}
      </Tab.Screen>

      <Tab.Screen
        name="Analytics"
        options={{
          title: 'Analytics',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="chart-line"
              size={size}
              color={color}
              style={styles.icon}
            />
          ),
        }}
      >
        {() => (
          <AuthGuard feature="Analytics">
            <AnalyticsScreen />
          </AuthGuard>
        )}
      </Tab.Screen>

      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: 'Settings',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="cog-outline"
              size={size}
              color={color}
              style={styles.icon}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: COLORS.surface,
    borderTopColor: COLORS.border,
    borderTopWidth: 1,
    height: 70,
    paddingBottom: SPACING.sm,
    paddingTop: SPACING.xs,
    elevation: 8,
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  tabBarLabel: {
    fontSize: 11,
    fontWeight: '500',
    marginTop: SPACING.xs,
  },
  tabBarIcon: {
    marginBottom: 0,
  },
  tabBarItem: {
    paddingVertical: SPACING.xs,
  },
  icon: {
    strokeWidth: 1.5,
  },
});

export default BottomTabNavigator;
