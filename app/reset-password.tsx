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
  green: "#4CAF50",
};

export default function ResetPasswordScreen() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Password strength indicators
  const [passwordStrength, setPasswordStrength] = useState({
    hasMinLength: false,
    hasUpperCase: false,
    hasLowerCase: false,
    hasNumber: false,
    hasSpecialChar: false,
  });

  const handlePasswordChange = (text: string) => {
    setPassword(text);
    setPasswordStrength({
      hasMinLength: text.length >= 8,
      hasUpperCase: /[A-Z]/.test(text),
      hasLowerCase: /[a-z]/.test(text),
      hasNumber: /\d/.test(text),
      hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/.test(text),
    });
  };

  const handleResetPassword = () => {
    if (password !== confirmPassword) {
      console.log("Passwords don't match");
      return;
    }
    // TODO: Implement password reset logic
    console.log("Reset password:", password);
    router.replace("/login");
  };

  const isPasswordValid = Object.values(passwordStrength).every((v) => v);

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
            <View style={styles.iconCircle}>
              <Ionicons name="lock-open" size={40} color={COLORS.white} />
            </View>
            <Text style={styles.title}>Reset Password</Text>
            <Text style={styles.subtitle}>
              Create a new strong password for your account
            </Text>
          </View>

          {/* Form Section */}
          <View style={styles.formContainer}>
            {/* New Password Field */}
            <View style={styles.fieldContainer}>
              <Text style={styles.label}>New Password</Text>
              <View style={styles.inputContainer}>
                <View style={styles.iconWrapper}>
                  <Ionicons
                    name="lock-closed"
                    size={20}
                    color={COLORS.primary}
                  />
                </View>
                <TextInput
                  style={styles.input}
                  placeholder="Enter new password"
                  placeholderTextColor={COLORS.textLight}
                  value={password}
                  onChangeText={handlePasswordChange}
                  secureTextEntry={!showPassword}
                  autoCapitalize="none"
                  autoComplete="password"
                />
                <TouchableOpacity
                  onPress={() => setShowPassword(!showPassword)}
                  style={styles.eyeIcon}
                >
                  <Ionicons
                    name={showPassword ? "eye-off" : "eye"}
                    size={22}
                    color={COLORS.textLight}
                  />
                </TouchableOpacity>
              </View>
            </View>

            {/* Password Strength Indicators */}
            <View style={styles.strengthContainer}>
              <Text style={styles.strengthTitle}>Password must contain:</Text>
              <View style={styles.strengthList}>
                <StrengthIndicator
                  label="At least 8 characters"
                  isMet={passwordStrength.hasMinLength}
                />
                <StrengthIndicator
                  label="One uppercase letter"
                  isMet={passwordStrength.hasUpperCase}
                />
                <StrengthIndicator
                  label="One lowercase letter"
                  isMet={passwordStrength.hasLowerCase}
                />
                <StrengthIndicator
                  label="One number"
                  isMet={passwordStrength.hasNumber}
                />
                <StrengthIndicator
                  label="One special character"
                  isMet={passwordStrength.hasSpecialChar}
                />
              </View>
            </View>

            {/* Confirm Password Field */}
            <View style={styles.fieldContainer}>
              <Text style={styles.label}>Confirm Password</Text>
              <View style={styles.inputContainer}>
                <View style={styles.iconWrapper}>
                  <Ionicons
                    name="lock-closed"
                    size={20}
                    color={COLORS.primary}
                  />
                </View>
                <TextInput
                  style={styles.input}
                  placeholder="Confirm new password"
                  placeholderTextColor={COLORS.textLight}
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                  secureTextEntry={!showConfirmPassword}
                  autoCapitalize="none"
                  autoComplete="password"
                />
                <TouchableOpacity
                  onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                  style={styles.eyeIcon}
                >
                  <Ionicons
                    name={showConfirmPassword ? "eye-off" : "eye"}
                    size={22}
                    color={COLORS.textLight}
                  />
                </TouchableOpacity>
              </View>
              {confirmPassword.length > 0 && password !== confirmPassword && (
                <Text style={styles.errorText}>Passwords don't match</Text>
              )}
            </View>

            {/* Reset Button */}
            <TouchableOpacity
              style={[
                styles.resetButton,
                !isPasswordValid && styles.resetButtonDisabled,
              ]}
              onPress={handleResetPassword}
              disabled={!isPasswordValid}
            >
              <Text style={styles.resetButtonText}>Reset Password</Text>
              <Ionicons
                name="checkmark-circle"
                size={20}
                color={COLORS.white}
              />
            </TouchableOpacity>

            {/* Success Message */}
            <View style={styles.infoContainer}>
              <Ionicons
                name="information-circle"
                size={20}
                color={COLORS.primary}
              />
              <Text style={styles.infoText}>
                After resetting, you'll be redirected to login with your new
                password
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

// Strength Indicator Component
function StrengthIndicator({
  label,
  isMet,
}: {
  label: string;
  isMet: boolean;
}) {
  return (
    <View style={styles.strengthItem}>
      <View
        style={[
          styles.strengthDot,
          isMet ? styles.strengthDotMet : styles.strengthDotUnmet,
        ]}
      >
        {isMet && <Ionicons name="checkmark" size={12} color={COLORS.white} />}
      </View>
      <Text style={[styles.strengthText, isMet && styles.strengthTextMet]}>
        {label}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  headerContainer: {
    alignItems: "center",
    paddingTop: 80,
    paddingBottom: 40,
    width: "100%",
    paddingHorizontal: 20,
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
  formContainer: {
    width: "100%",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  fieldContainer: {
    marginBottom: 24,
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
  eyeIcon: {
    padding: 8,
  },
  strengthContainer: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: COLORS.card,
  },
  strengthTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: COLORS.text,
    marginBottom: 12,
  },
  strengthList: {
    gap: 10,
  },
  strengthItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  strengthDot: {
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  strengthDotMet: {
    backgroundColor: COLORS.green,
  },
  strengthDotUnmet: {
    backgroundColor: COLORS.card,
    borderWidth: 1.5,
    borderColor: COLORS.textLight,
  },
  strengthText: {
    fontSize: 14,
    color: COLORS.textLight,
  },
  strengthTextMet: {
    color: COLORS.text,
    fontWeight: "500",
  },
  errorText: {
    fontSize: 13,
    color: "#FF4D67",
    marginTop: 6,
    marginLeft: 4,
  },
  resetButton: {
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
  resetButtonDisabled: {
    backgroundColor: COLORS.textLight,
    opacity: 0.5,
  },
  resetButtonText: {
    color: COLORS.white,
    fontSize: 17,
    fontWeight: "600",
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.card,
    padding: 16,
    borderRadius: 12,
    gap: 12,
  },
  infoText: {
    flex: 1,
    fontSize: 14,
    color: COLORS.text,
    lineHeight: 20,
  },
});
