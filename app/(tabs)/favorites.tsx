import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { width } = Dimensions.get("window");

const COLORS = {
  background: "#FDF5FF",
  primary: "#FFB6E1",
  secondary: "#D8B4E2",
  text: "#1A1A1A",
  textLight: "#666666",
  white: "#FFFFFF",
  card: "#F5E6FF",
  red: "#FF4D67",
};

const favoriteProducts = [
  {
    id: 1,
    name: "Summer Dress",
    price: 89.99,
    image:
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=400&fit=crop",
    rating: 4.8,
  },
  {
    id: 2,
    name: "Classic Denim Jacket",
    price: 129.99,
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop",
    rating: 4.9,
  },
  {
    id: 3,
    name: "Casual T-Shirt",
    price: 39.99,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
    rating: 4.5,
  },
  {
    id: 4,
    name: "Elegant Blouse",
    price: 79.99,
    image:
      "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=400&h=400&fit=crop",
    rating: 4.7,
  },
];

export default function FavoritesScreen() {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>My Favorites</Text>
            <Text style={styles.subtitle}>
              {favoriteProducts.length} items you loved
            </Text>
          </View>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="heart" size={24} color={COLORS.red} />
          </TouchableOpacity>
        </View>

        {/* Favorites List */}
        <View style={styles.productsContainer}>
          {favoriteProducts.map((product) => (
            <View key={product.id} style={styles.productCard}>
              <View style={styles.productImageContainer}>
                <Image
                  source={{ uri: product.image }}
                  style={styles.productImage}
                />
                <TouchableOpacity style={styles.favoriteButton}>
                  <Ionicons name="heart" size={20} color={COLORS.red} />
                </TouchableOpacity>
              </View>
              <View style={styles.productInfo}>
                <Text style={styles.productName}>{product.name}</Text>
                <View style={styles.productFooter}>
                  <Text style={styles.productPrice}>${product.price}</Text>
                  <View style={styles.ratingContainer}>
                    <Ionicons name="star" size={16} color="#FFD700" />
                    <Text style={styles.ratingText}>{product.rating}</Text>
                  </View>
                </View>
              </View>
            </View>
          ))}
        </View>

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
  productsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 20,
    gap: 16,
  },
  productCard: {
    width: "47%",
    backgroundColor: COLORS.white,
    borderRadius: 20,
    overflow: "hidden",
    marginBottom: 16,
  },
  productImageContainer: {
    width: "100%",
    height: 200,
    backgroundColor: COLORS.card,
    position: "relative",
  },
  productImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  favoriteButton: {
    position: "absolute",
    top: 12,
    right: 12,
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: COLORS.white,
    justifyContent: "center",
    alignItems: "center",
  },
  productInfo: {
    padding: 12,
  },
  productName: {
    fontSize: 15,
    fontWeight: "600",
    color: COLORS.text,
    marginBottom: 8,
  },
  productFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  productPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: COLORS.text,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  ratingText: {
    fontSize: 13,
    color: COLORS.textLight,
    fontWeight: "500",
  },
});
