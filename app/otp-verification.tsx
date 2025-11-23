import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useEffect, useRef, useState } from "react";
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

const OTP_LENGTH = 6;

export default function OTPVerificationScreen() {
  const router = useRouter();
  const [otp, setOtp] = useState(Array(OTP_LENGTH).fill(""));
  const [timer, setTimer] = useState(60);
  const inputRefs = useRef<(TextInput | null)[]>([]);

  useEffect(() => {
    // Focus first input on mount
    inputRefs.current[0]?.focus();

    // Timer countdown
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleOtpChange = (text: string, index: number) => {
    // Only allow numbers
    if (text && !/^\d+$/.test(text)) return;

    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    // Auto-focus next input
    if (text && index < OTP_LENGTH - 1) {
      inputRefs.current[index + 1]?.focus();
    }

    // Auto-verify when all filled
    if (newOtp.every((digit) => digit !== "") && index === OTP_LENGTH - 1) {
      handleVerify(newOtp.join(""));
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerify = (code?: string) => {
    const otpCode = code || otp.join("");
    // TODO: Implement OTP verification logic
    console.log("Verify OTP:", otpCode);
    router.push("/reset-password");
  };

  const handleResendCode = () => {
    // TODO: Implement resend code logic
    console.log("Resend OTP code");
    setTimer(60);
    setOtp(Array(OTP_LENGTH).fill(""));
    inputRefs.current[0]?.focus();
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
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
              <Ionicons
                name="shield-checkmark"
                size={40}
                color={COLORS.white}
              />
            </View>
            <Text style={styles.title}>Verification Code</Text>
            <Text style={styles.subtitle}>
              We've sent a 6-digit code to your email{"\n"}
              Please enter it below
            </Text>
          </View>

          {/* OTP Input Section */}
          <View style={styles.otpContainer}>
            {otp.map((digit, index) => (
              <View key={index} style={styles.otpInputWrapper}>
                <TextInput
                  ref={(ref) => {
                    inputRefs.current[index] = ref;
                  }}
                  style={[
                    styles.otpInput,
                    digit ? styles.otpInputFilled : null,
                  ]}
                  value={digit}
                  onChangeText={(text) => handleOtpChange(text, index)}
                  onKeyPress={(e) => handleKeyPress(e, index)}
                  keyboardType="number-pad"
                  maxLength={1}
                  selectTextOnFocus
                />
              </View>
            ))}
          </View>

          {/* Timer */}
          <View style={styles.timerContainer}>
            <Ionicons name="time-outline" size={20} color={COLORS.textLight} />
            <Text style={styles.timerText}>
              Code expires in{" "}
              <Text style={styles.timerValue}>{formatTime(timer)}</Text>
            </Text>
          </View>

          {/* Verify Button */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.verifyButton}
              onPress={() => handleVerify()}
            >
              <Text style={styles.verifyButtonText}>Verify Code</Text>
              <Ionicons
                name="checkmark-circle"
                size={20}
                color={COLORS.white}
              />
            </TouchableOpacity>
          </View>

          {/* Resend Code */}
          <View style={styles.resendContainer}>
            <Text style={styles.resendText}>
              Didn&apos;t receive the code?{" "}
            </Text>
            <TouchableOpacity onPress={handleResendCode} disabled={timer > 0}>
              <Text
                style={[
                  styles.resendLink,
                  timer > 0 && styles.resendLinkDisabled,
                ]}
              >
                Resend
              </Text>
            </TouchableOpacity>
          </View>

          {/* Tips */}
          <View style={styles.tipsContainer}>
            <View style={styles.tipItem}>
              <Ionicons name="mail" size={18} color={COLORS.primary} />
              <Text style={styles.tipText}>
                Check your inbox and spam folder
              </Text>
            </View>
            <View style={styles.tipItem}>
              <Ionicons
                name="information-circle"
                size={18}
                color={COLORS.primary}
              />
              <Text style={styles.tipText}>Code is valid for 10 minutes</Text>
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
    paddingBottom: 40,
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
  otpContainer: {
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: 20,
    marginTop: 20,
    gap: 12,
  },
  otpInputWrapper: {
    flex: 1,
    maxWidth: 50,
  },
  otpInput: {
    width: "100%",
    height: 56,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: COLORS.primary,
    backgroundColor: COLORS.white,
    fontSize: 24,
    fontWeight: "700",
    color: COLORS.text,
    textAlign: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  otpInputFilled: {
    borderColor: COLORS.text,
    backgroundColor: COLORS.card,
  },
  timerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 32,
    gap: 8,
  },
  timerText: {
    fontSize: 15,
    color: COLORS.textLight,
  },
  timerValue: {
    fontWeight: "700",
    color: COLORS.primary,
  },
  buttonContainer: {
    paddingHorizontal: 20,
    marginTop: 40,
  },
  verifyButton: {
    flexDirection: "row",
    backgroundColor: COLORS.text,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    shadowColor: COLORS.text,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  verifyButtonText: {
    color: COLORS.white,
    fontSize: 17,
    fontWeight: "600",
  },
  resendContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 24,
  },
  resendText: {
    fontSize: 15,
    color: COLORS.textLight,
  },
  resendLink: {
    fontSize: 15,
    color: COLORS.primary,
    fontWeight: "600",
  },
  resendLinkDisabled: {
    color: COLORS.textLight,
    opacity: 0.5,
  },
  tipsContainer: {
    marginTop: 40,
    paddingHorizontal: 20,
    gap: 16,
  },
  tipItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.white,
    padding: 16,
    borderRadius: 12,
    gap: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  tipText: {
    flex: 1,
    fontSize: 14,
    color: COLORS.text,
    lineHeight: 20,
  },
});
