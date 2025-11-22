import { products } from "@/constants/data";
import { COLORS, SCREEN } from "@/constants/styles";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useRef, useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
const { width, height } = SCREEN;
const sizes = ["S", "M", "L", "XL"];
const colors = [
  { id: 1, name: "Pink", color: "#FFB6E1" },
  { id: 2, name: "Blue", color: "#A8C5E5" },
  { id: 3, name: "Purple", color: "#C8B6E2" },
];

export default function ProductDetailsScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const productId = params.id;
  const product = products.find((p) => p.id === Number(productId));
  const insets = useSafeAreaInsets();

  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const scrollViewRef = useRef<ScrollView>(null);

  if (!product) {
    return (
      <View style={styles.container}>
        <Text>Product not found</Text>
      </View>
    );
  }

  const handlePrevImage = () => {
    if (currentImageIndex > 0) {
      const newIndex = currentImageIndex - 1;
      scrollViewRef.current?.scrollTo({ x: newIndex * width, animated: true });
      setCurrentImageIndex(newIndex);
    }
  };

  const handleNextImage = () => {
    if (currentImageIndex < product.images.length - 1) {
      const newIndex = currentImageIndex + 1;
      scrollViewRef.current?.scrollTo({ x: newIndex * width, animated: true });
      setCurrentImageIndex(newIndex);
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Ionicons name="arrow-back" size={24} color={COLORS.text} />
        </TouchableOpacity>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.headerButton}>
            <Ionicons name="share-outline" size={22} color={COLORS.text} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.headerButton}
            onPress={() => setIsFavorite(!isFavorite)}
          >
            <Ionicons
              name={isFavorite ? "heart" : "heart-outline"}
              size={22}
              color={isFavorite ? "#FF4D67" : COLORS.text}
            />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Product Image */}
        <View style={styles.imageSection}>
          <View style={styles.imageContainer}>
            <ScrollView
              ref={scrollViewRef}
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              onMomentumScrollEnd={(event) => {
                const index = Math.round(
                  event.nativeEvent.contentOffset.x / width
                );
                setCurrentImageIndex(index);
              }}
            >
              {product.images.map((image, index) => (
                <View key={index} style={styles.imageWrapper}>
                  <Image source={{ uri: image }} style={styles.productImage} />
                  <View style={styles.imageOverlay}>
                    <Text style={styles.overlayText}>2025 Street Vibes</Text>
                  </View>
                </View>
              ))}
            </ScrollView>
          </View>

          {/* Image Indicators */}
          <View style={styles.imageIndicators}>
            {product.images.map((_, index) => (
              <View
                key={index}
                style={[
                  styles.indicator,
                  index === currentImageIndex && styles.activeIndicator,
                ]}
              />
            ))}
          </View>

          {/* Navigation Arrows */}
          <TouchableOpacity style={styles.prevArrow} onPress={handlePrevImage}>
            <Ionicons name="chevron-back" size={24} color={COLORS.text} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.nextArrow} onPress={handleNextImage}>
            <Ionicons name="chevron-forward" size={24} color={COLORS.text} />
          </TouchableOpacity>
        </View>

        {/* Product Info */}
        <View style={styles.infoSection}>
          <View style={styles.titleRow}>
            <Text style={styles.productName}>{product.name}</Text>
            <View style={styles.ratingContainer}>
              <Ionicons name="star" size={18} color="#FFD700" />
              <Text style={styles.ratingText}>{product.rating}</Text>
            </View>
          </View>
          <Text style={styles.price}>${product.price.toFixed(2)}</Text>

          {/* Size Selection */}
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Size</Text>
            <View style={styles.sizesContainer}>
              {sizes.map((size) => (
                <TouchableOpacity
                  key={size}
                  style={[
                    styles.sizeButton,
                    selectedSize === size && styles.sizeButtonActive,
                  ]}
                  onPress={() => setSelectedSize(size)}
                >
                  <Text
                    style={[
                      styles.sizeText,
                      selectedSize === size && styles.sizeTextActive,
                    ]}
                  >
                    {size}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Color Selection */}
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Color</Text>
            <View style={styles.colorsContainer}>
              {colors.map((color) => (
                <TouchableOpacity
                  key={color.id}
                  style={[
                    styles.colorButton,
                    { backgroundColor: color.color },
                    selectedColor === color.id && styles.colorButtonActive,
                  ]}
                  onPress={() => setSelectedColor(color.id)}
                >
                  {selectedColor === color.id && (
                    <Ionicons name="checkmark" size={20} color={COLORS.white} />
                  )}
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Description */}
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Description</Text>
            <Text style={styles.description}>{product.description}</Text>
            <TouchableOpacity>
              <Text style={styles.seeMore}>See More</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ height: 120 }} />
      </ScrollView>

      {/* Bottom Bar */}
      <View style={[styles.bottomBar, { paddingBottom: 16 + insets.bottom }]}>
        <TouchableOpacity
          style={styles.cartIconButton}
          onPress={() => router.push("/(tabs)/cart")}
        >
          <Ionicons name="cart-outline" size={24} color={COLORS.text} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.addToCartButton}>
          <Text style={styles.addToCartText}>Add to cart</Text>
          <View style={styles.cartBadge}>
            <Ionicons name="bag-outline" size={20} color={COLORS.white} />
          </View>
        </TouchableOpacity>
      </View>
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
    paddingBottom: 10,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  backButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: COLORS.white,
    justifyContent: "center",
    alignItems: "center",
  },
  headerRight: {
    flexDirection: "row",
    gap: 12,
  },
  headerButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: COLORS.white,
    justifyContent: "center",
    alignItems: "center",
  },
  imageSection: {
    position: "relative",
    marginTop: 100,
  },
  imageContainer: {
    width: width,
    height: height * 0.5,
  },
  imageWrapper: {
    width: width,
    paddingHorizontal: 20,
  },
  productImage: {
    width: width - 40,
    height: height * 0.5,
    borderRadius: 30,
    resizeMode: "cover",
  },
  imageOverlay: {
    position: "absolute",
    top: 20,
    left: 40,
    right: 40,
  },
  overlayText: {
    fontSize: 20,
    fontWeight: "bold",
    color: COLORS.text,
    textShadowColor: "rgba(255, 255, 255, 0.8)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },
  imageIndicators: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 16,
    gap: 6,
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: COLORS.textLight,
    opacity: 0.3,
  },
  activeIndicator: {
    backgroundColor: COLORS.text,
    width: 24,
    opacity: 1,
  },
  prevArrow: {
    position: "absolute",
    left: 10,
    top: "40%",
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.white,
    justifyContent: "center",
    alignItems: "center",
  },
  nextArrow: {
    position: "absolute",
    right: 10,
    top: "40%",
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.white,
    justifyContent: "center",
    alignItems: "center",
  },
  infoSection: {
    paddingHorizontal: 20,
    paddingTop: 24,
  },
  titleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  productName: {
    fontSize: 24,
    fontWeight: "bold",
    color: COLORS.text,
    flex: 1,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    backgroundColor: COLORS.white,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  ratingText: {
    fontSize: 15,
    color: COLORS.text,
    fontWeight: "600",
  },
  price: {
    fontSize: 28,
    fontWeight: "bold",
    color: COLORS.text,
    marginBottom: 24,
  },
  sectionContainer: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: COLORS.text,
    marginBottom: 12,
  },
  sizesContainer: {
    flexDirection: "row",
    gap: 12,
  },
  sizeButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: COLORS.white,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: COLORS.white,
  },
  sizeButtonActive: {
    backgroundColor: COLORS.text,
    borderColor: COLORS.text,
  },
  sizeText: {
    fontSize: 16,
    fontWeight: "600",
    color: COLORS.text,
  },
  sizeTextActive: {
    color: COLORS.white,
  },
  colorsContainer: {
    flexDirection: "row",
    gap: 12,
  },
  colorButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    borderColor: "transparent",
  },
  colorButtonActive: {
    borderColor: COLORS.text,
  },
  description: {
    fontSize: 15,
    color: COLORS.textLight,
    lineHeight: 22,
    marginBottom: 8,
  },
  seeMore: {
    fontSize: 15,
    color: COLORS.text,
    fontWeight: "600",
  },
  bottomBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    gap: 12,
    paddingHorizontal: 20,
    paddingTop: 16,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  cartIconButton: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: COLORS.background,
    justifyContent: "center",
    alignItems: "center",
  },
  addToCartButton: {
    flex: 1,
    height: 56,
    backgroundColor: COLORS.text,
    borderRadius: 28,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
  },
  addToCartText: {
    fontSize: 18,
    fontWeight: "600",
    color: COLORS.white,
  },
  cartBadge: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
  },
});
