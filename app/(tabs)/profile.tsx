import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const COLORS = {
  background: "#FDF5FF",
  primary: "#FFB6E1",
  secondary: "#D8B4E2",
  text: "#1A1A1A",
  textLight: "#666666",
  white: "#FFFFFF",
  card: "#F5E6FF",
};

const profileSections = [
  {
    title: "Account",
    items: [
      { id: 1, label: "Edit Profile", icon: "person-outline" },
      { id: 2, label: "My Orders", icon: "receipt-outline" },
      { id: 3, label: "Addresses", icon: "location-outline" },
      { id: 4, label: "Payment Methods", icon: "card-outline" },
    ],
  },
  {
    title: "Preferences",
    items: [
      { id: 5, label: "Notifications", icon: "notifications-outline" },
      { id: 6, label: "Language", icon: "language-outline" },
      { id: 7, label: "Dark Mode", icon: "moon-outline" },
    ],
  },
  {
    title: "Support",
    items: [
      { id: 8, label: "Help Center", icon: "help-circle-outline" },
      { id: 9, label: "Privacy Policy", icon: "shield-checkmark-outline" },
      { id: 10, label: "Terms of Service", icon: "document-text-outline" },
    ],
  },
];

export default function ProfileScreen() {
  const router = useRouter();

  const handleResetOnboarding = async () => {
    await AsyncStorage.removeItem("hasCompletedOnboarding");
    router.replace("/onboarding");
  };

  const handleLogout = async () => {
    await AsyncStorage.setItem("isLoggedIn", "false");
    router.replace("/login");
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>My Profile</Text>
            <Text style={styles.subtitle}>Manage your account</Text>
          </View>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="settings-outline" size={24} color={COLORS.text} />
          </TouchableOpacity>
        </View>

        {/* Profile Card */}
        <View style={styles.profileCard}>
          <View style={styles.avatarContainer}>
            <View style={styles.avatar}>
              <Ionicons name="person" size={40} color={COLORS.white} />
            </View>
            <TouchableOpacity style={styles.editAvatarButton}>
              <Ionicons name="camera" size={16} color={COLORS.white} />
            </TouchableOpacity>
          </View>
          <Text style={styles.profileName}>Fashion Lover</Text>
          <Text style={styles.profileEmail}>fashionlover@example.com</Text>
        </View>

        {/* Profile Sections */}
        {profileSections.map((section, index) => (
          <View key={index} style={styles.section}>
            <Text style={styles.sectionTitle}>{section.title}</Text>
            <View style={styles.sectionItems}>
              {section.items.map((item) => (
                <TouchableOpacity key={item.id} style={styles.menuItem}>
                  <View style={styles.menuItemLeft}>
                    <View style={styles.iconContainer}>
                      <Ionicons
                        name={item.icon as any}
                        size={20}
                        color={COLORS.text}
                      />
                    </View>
                    <Text style={styles.menuItemText}>{item.label}</Text>
                  </View>
                  <Ionicons
                    name="chevron-forward"
                    size={20}
                    color={COLORS.textLight}
                  />
                </TouchableOpacity>
              ))}
            </View>
          </View>
        ))}

        {/* Reset Onboarding Button */}
        <TouchableOpacity
          style={styles.resetButton}
          onPress={handleResetOnboarding}
        >
          <Ionicons name="refresh-outline" size={20} color={COLORS.white} />
          <Text style={styles.resetButtonText}>Reset Onboarding</Text>
        </TouchableOpacity>

        {/* Logout Button */}
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Ionicons name="log-out-outline" size={20} color={COLORS.text} />
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>

        <View style={{ height: 100 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
  },
  greeting: {
    fontSize: 28,
    fontWeight: "bold",
    color: COLORS.text,
  },
  subtitle: {
    fontSize: 14,
    color: COLORS.textLight,
    marginTop: 4,
  },
  iconButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: COLORS.white,
    justifyContent: "center",
    alignItems: "center",
  },
  profileCard: {
    backgroundColor: COLORS.white,
    marginHorizontal: 20,
    marginBottom: 24,
    padding: 24,
    borderRadius: 20,
    alignItems: "center",
  },
  avatarContainer: {
    position: "relative",
    marginBottom: 16,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  editAvatarButton: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: COLORS.text,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: COLORS.white,
  },
  profileName: {
    fontSize: 22,
    fontWeight: "700",
    color: COLORS.text,
    marginBottom: 4,
  },
  profileEmail: {
    fontSize: 14,
    color: COLORS.textLight,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: COLORS.text,
    paddingHorizontal: 20,
    marginBottom: 12,
  },
  sectionItems: {
    backgroundColor: COLORS.white,
    marginHorizontal: 20,
    borderRadius: 16,
    overflow: "hidden",
  },
  menuItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.card,
  },
  menuItemLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconContainer: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: COLORS.card,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  menuItemText: {
    fontSize: 15,
    fontWeight: "500",
    color: COLORS.text,
  },
  resetButton: {
    flexDirection: "row",
    backgroundColor: COLORS.text,
    marginHorizontal: 20,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    marginBottom: 12,
  },
  resetButtonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "600",
  },
  logoutButton: {
    flexDirection: "row",
    backgroundColor: COLORS.white,
    marginHorizontal: 20,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    borderWidth: 1,
    borderColor: COLORS.card,
  },
  logoutButtonText: {
    color: COLORS.text,
    fontSize: 16,
    fontWeight: "600",
  },
});
