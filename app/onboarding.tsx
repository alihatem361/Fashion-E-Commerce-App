import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import React, { useRef, useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { width, height } = Dimensions.get("window");

const COLORS = {
  background: "#FDF5FF",
  primary: "#FFB6E1",
  secondary: "#D8B4E2",
  text: "#1A1A1A",
  textLight: "#666666",
  white: "#FFFFFF",
  card: "#F5E6FF",
};

const slides = [
  {
    id: "1",
    title: "Your Fashion Story",
    subtitle: "Starts Now",
    description:
      "Discover unique styles and trendy outfits to express your fashion journey today.",
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&h=1000&fit=crop",
  },
  {
    id: "2",
    title: "2025 Fashion",
    subtitle: "Collection",
    description:
      "Browse the latest trends and exclusive fashion pieces for the new season.",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&h=1000&fit=crop",
  },
  {
    id: "3",
    title: "Style Your",
    subtitle: "Perfect Look",
    description:
      "Find the perfect outfit that matches your personality and style.",
    image:
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=800&h=1000&fit=crop",
  },
];

export default function Onboarding() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);
  const router = useRouter();

  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      flatListRef.current?.scrollToIndex({ index: currentIndex + 1 });
    } else {
      handleFinish();
    }
  };

  const handleSkip = () => {
    handleFinish();
  };

  const handleFinish = async () => {
    await AsyncStorage.setItem("hasCompletedOnboarding", "true");
    router.replace("/(tabs)");
  };

  const renderSlide = ({ item }: { item: (typeof slides)[0] }) => (
    <View style={styles.slide}>
      <View style={styles.imageContainer}>
        <View style={styles.gradientOverlay} />
        <Image source={{ uri: item.image }} style={styles.image} />
        <View style={styles.textOverlay}>
          <Text style={styles.overlayText}>2025</Text>
          <Text style={styles.overlayText}>Street Vibes</Text>
        </View>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtitle}>{item.subtitle}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );

  const renderDots = () => (
    <View style={styles.dotsContainer}>
      {slides.map((_, index) => (
        <View
          key={index}
          style={[styles.dot, index === currentIndex && styles.activeDot]}
        />
      ))}
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={slides}
        renderItem={renderSlide}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={(event) => {
          const index = Math.round(event.nativeEvent.contentOffset.x / width);
          setCurrentIndex(index);
        }}
        keyExtractor={(item) => item.id}
      />

      <View style={styles.footer}>
        {renderDots()}
        <View style={styles.buttonContainer}>
          {currentIndex < slides.length - 1 ? (
            <>
              <TouchableOpacity onPress={handleSkip} style={styles.skipButton}>
                <Text style={styles.skipText}>Skip</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleNext} style={styles.nextButton}>
                <Text style={styles.nextText}>Next</Text>
              </TouchableOpacity>
            </>
          ) : (
            <TouchableOpacity
              onPress={handleFinish}
              style={styles.getStartedButton}
            >
              <Text style={styles.getStartedText}>Get Started</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  slide: {
    width,
    height,
    alignItems: "center",
  },
  imageContainer: {
    width: width * 0.85,
    height: height * 0.55,
    marginTop: 60,
    borderRadius: 30,
    overflow: "hidden",
    position: "relative",
    backgroundColor: COLORS.card,
  },
  gradientOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(255, 182, 225, 0.15)",
    zIndex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  textOverlay: {
    position: "absolute",
    top: 20,
    left: 20,
    right: 20,
    zIndex: 2,
  },
  overlayText: {
    fontSize: 24,
    fontWeight: "bold",
    color: COLORS.text,
    textShadowColor: "rgba(255, 255, 255, 0.8)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },
  content: {
    flex: 1,
    paddingHorizontal: 40,
    paddingTop: 50,
    alignItems: "center",
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: COLORS.text,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 36,
    fontWeight: "bold",
    fontStyle: "italic",
    color: COLORS.text,
    marginBottom: 20,
    textAlign: "center",
  },
  description: {
    fontSize: 15,
    color: COLORS.textLight,
    textAlign: "center",
    lineHeight: 22,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  dotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 30,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: COLORS.secondary,
    marginHorizontal: 4,
    opacity: 0.3,
  },
  activeDot: {
    backgroundColor: COLORS.text,
    width: 24,
    opacity: 1,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  skipButton: {
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  skipText: {
    color: COLORS.text,
    fontSize: 16,
    fontWeight: "500",
  },
  nextButton: {
    backgroundColor: COLORS.text,
    paddingVertical: 14,
    paddingHorizontal: 36,
    borderRadius: 30,
  },
  nextText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "600",
  },
  getStartedButton: {
    backgroundColor: COLORS.text,
    paddingVertical: 18,
    borderRadius: 30,
    flex: 1,
    alignItems: "center",
  },
  getStartedText: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: "700",
  },
});
