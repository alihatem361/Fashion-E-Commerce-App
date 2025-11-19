import { categories, products } from "@/constants/data";
import { useLocalSearchParams, useRouter } from "expo-router";
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

export default function CategoryDetails() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const categoryId = params.id;
  const categoryDetails = categories.find(
    (category) => category.id === Number(categoryId)
  );

  const relatedProducts = products.filter(
    (product) => product.categoryId === Number(categoryId)
  );

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Hero Image Section */}
      <View style={styles.heroContainer}>
        <Image
          source={{ uri: categoryDetails?.image }}
          style={styles.heroImage}
          resizeMode="cover"
        />
        <View style={styles.overlay} />

        {/* Back Button */}
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
          activeOpacity={0.7}
        >
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>

        {/* Category Name Overlay */}
        <View style={styles.heroTextContainer}>
          <View
            style={[
              styles.categoryBadge,
              { backgroundColor: categoryDetails?.color + "20" },
            ]}
          >
            <View
              style={[
                styles.colorDot,
                { backgroundColor: categoryDetails?.color },
              ]}
            />
            <Text style={styles.categoryBadgeText}>
              {categoryDetails?.name}
            </Text>
          </View>
          <Text style={styles.heroTitle}>{categoryDetails?.name}</Text>
        </View>
      </View>

      {/* Description Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About</Text>
        <Text style={styles.description}>{categoryDetails?.description}</Text>
      </View>

      {/* Related Products Section */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Related Products</Text>
          <Text style={styles.productCount}>
            {relatedProducts.length}{" "}
            {relatedProducts.length === 1 ? "item" : "items"}
          </Text>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.productsContainer}
        >
          {relatedProducts.map((product) => (
            <TouchableOpacity
              key={product.id}
              style={styles.productCard}
              onPress={() =>
                router.push({
                  pathname: "/product-details",
                  params: { id: product.id },
                })
              }
              activeOpacity={0.8}
            >
              <Image
                source={{ uri: product.image }}
                style={styles.productImage}
                resizeMode="cover"
              />
              <View style={styles.productInfo}>
                <Text style={styles.productName} numberOfLines={2}>
                  {product.name}
                </Text>
                <Text style={styles.productPrice}>${product.price}</Text>
                {product.rating && (
                  <View style={styles.ratingContainer}>
                    <Text style={styles.ratingText}>⭐ {product.rating}</Text>
                  </View>
                )}
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Bottom Spacing */}
      <View style={styles.bottomSpacer} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  heroContainer: {
    position: "relative",
    height: 300,
    width: "100%",
  },
  heroImage: {
    width: "100%",
    height: "100%",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
  backButton: {
    position: "absolute",
    top: 50,
    left: 20,
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
  },
  backButtonText: {
    fontSize: 24,
    color: "#000",
    fontWeight: "600",
  },
  heroTextContainer: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
  },
  categoryBadge: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    marginBottom: 8,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
  },
  colorDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 6,
  },
  categoryBadgeText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  heroTitle: {
    fontSize: 36,
    fontWeight: "800",
    color: "#fff",
    textShadowColor: "rgba(0, 0, 0, 0.3)",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  section: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#1a1a1a",
  },
  productCount: {
    fontSize: 14,
    color: "#666",
    fontWeight: "500",
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: "#4a4a4a",
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  productsContainer: {
    paddingRight: 20,
  },
  productCard: {
    width: width * 0.45,
    marginRight: 16,
    backgroundColor: "#fff",
    borderRadius: 16,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  productImage: {
    width: "100%",
    height: width * 0.45,
  },
  productInfo: {
    padding: 12,
  },
  productName: {
    fontSize: 15,
    fontWeight: "600",
    color: "#1a1a1a",
    marginBottom: 6,
    minHeight: 40,
  },
  productPrice: {
    fontSize: 18,
    fontWeight: "800",
    color: "#2563eb",
    marginBottom: 4,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  ratingText: {
    fontSize: 13,
    color: "#666",
    fontWeight: "500",
  },
  bottomSpacer: {
    height: 30,
  },
});
