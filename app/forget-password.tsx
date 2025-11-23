import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
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

export default function ForgetPasswordScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  const handleSendCode = () => {
    // TODO: Implement send code logic
    console.log("Send reset code to:", email);
    router.push("/otp-verification");
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.container}>
          {/* Header Section */}
          <View style={styles.headerContainer}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => router.back()}
            >
              <Ionicons name="arrow-back" size={24} color={COLORS.text} />
            </TouchableOpacity>
            <View style={styles.iconCircle}>
              <Ionicons name="key" size={40} color={COLORS.white} />
            </View>
            <Text style={styles.title}>Forgot Password?</Text>
            <Text style={styles.subtitle}>
              Don&apos;t worry! Enter your email and we&apos;ll send you a code to reset
              your password
            </Text>
          </View>

          {/* Illustration */}
          <View style={styles.illustrationContainer}>
            <View style={styles.illustrationCircle}>
              <Ionicons name="mail-outline" size={60} color={COLORS.primary} />
            </View>
          </View>

          {/* Form Section */}
          <View style={styles.formContainer}>
            {/* Email Field */}
            <View style={styles.fieldContainer}>
              <Text style={styles.label}>Email Address</Text>
              <View style={styles.inputContainer}>
                <View style={styles.iconWrapper}>
                  <Ionicons name="mail" size={20} color={COLORS.primary} />
                </View>
                <TextInput
                  style={styles.input}
                  placeholder="Enter your email"
                  placeholderTextColor={COLORS.textLight}
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoComplete="email"
                />
              </View>
            </View>

            {/* Send Code Button */}
            <TouchableOpacity
              style={styles.sendButton}
              onPress={handleSendCode}
            >
              <Text style={styles.sendButtonText}>Send Reset Code</Text>
              <Ionicons name="send" size={20} color={COLORS.white} />
            </TouchableOpacity>

            {/* Back to Login Link */}
            <View style={styles.footerContainer}>
              <Ionicons name="arrow-back" size={16} color={COLORS.textLight} />
              <TouchableOpacity onPress={() => router.back()}>
                <Text style={styles.footerLink}>Back to Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  headerContainer: {
    alignItems: "center",
    paddingTop: 60,
    paddingBottom: 20,
    width: "100%",
    paddingHorizontal: 20,
  },
  backButton: {
    position: "absolute",
    top: 60,
    left: 20,
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: COLORS.white,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  iconCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    color: COLORS.text,
    marginBottom: 12,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 15,
    color: COLORS.textLight,
    textAlign: "center",
    lineHeight: 22,
  },
  illustrationContainer: {
    alignItems: "center",
    marginVertical: 40,
  },
  illustrationCircle: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: COLORS.card,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    borderColor: COLORS.white,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,
  },
  formContainer: {
    width: "100%",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  fieldContainer: {
    marginBottom: 32,
  },
  label: {
    fontSize: 15,
    fontWeight: "600",
    marginBottom: 10,
    color: COLORS.text,
    letterSpacing: 0.3,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.white,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: COLORS.primary,
    paddingHorizontal: 16,
    paddingVertical: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  iconWrapper: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: COLORS.card,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: COLORS.text,
    paddingVertical: 12,
  },
  sendButton: {
    flexDirection: "row",
    backgroundColor: COLORS.text,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    marginBottom: 24,
    shadowColor: COLORS.text,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  sendButtonText: {
    color: COLORS.white,
    fontSize: 17,
    fontWeight: "600",
  },
  footerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 6,
    paddingBottom: 40,
  },
  footerLink: {
    fontSize: 15,
    color: COLORS.primary,
    fontWeight: "600",
    marginLeft: 4,
  },
});
