import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  Text,
  View,
  useColorScheme as useNativeColorScheme,
} from "react-native";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/use-color-scheme";

export const unstable_settings = {
  anchor: "(tabs)",
};

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const scheme = useNativeColorScheme();
  console.log("Color scheme:", colorScheme);
  console.log("Native color scheme:", scheme);
  const [isReady, setIsReady] = useState(false);
  const [initialRoute, setInitialRoute] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const checkOnboarding = async () => {
      try {
        const hasCompleted = await AsyncStorage.getItem(
          "hasCompletedOnboarding"
        );

        // Set the initial route based on onboarding status
        if (!hasCompleted) {
          setInitialRoute("/onboarding");
        } else {
          setInitialRoute("/(tabs)");
        }
      } catch (error) {
        console.error("Error checking onboarding:", error);
        setInitialRoute("/(tabs)");
      } finally {
        setIsReady(true);
      }
    };

    checkOnboarding();
  }, []);

  useEffect(() => {
    if (isReady && initialRoute) {
      router.replace(initialRoute as any);
    }
  }, [isReady, initialRoute, router]);

  if (!isReady) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#FDF5FF",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "#1A1A1A", fontSize: 18, fontWeight: "600" }}>
          Loading...
        </Text>
      </View>
    );
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="onboarding" />
        <Stack.Screen name="(tabs)" />
        <Stack.Screen
          name="product-details"
          options={{ headerShown: false, presentation: "card" }}
        />
        <Stack.Screen name="test" />
        <Stack.Screen
          name="category-details"
          options={{ presentation: "card" }}
        />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
