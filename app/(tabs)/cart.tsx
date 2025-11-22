import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
    Image,
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
  red: "#FF4D67",
};

const initialCartItems = [
  {
    id: 1,
    name: "Summer Dress",
    price: 89.99,
    image:
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=400&fit=crop",
    size: "M",
    color: "Pink",
    quantity: 1,
  },
  {
    id: 2,
    name: "Classic Denim Jacket",
    price: 129.99,
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop",
    size: "L",
    color: "Blue",
    quantity: 2,
  },
];

export default function CartScreen() {
  const router = useRouter();

  const [cartItems, setCartItems] = useState(initialCartItems);

  const updateQuantity = (id: number, delta: number) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = 10;
  const total = subtotal + shipping;

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Shopping Cart</Text>
            <Text style={styles.subtitle}>
              {cartItems.length} items in cart
            </Text>
          </View>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="cart" size={24} color={COLORS.primary} />
          </TouchableOpacity>
        </View>

        {/* Cart Items */}
        <View style={styles.cartItemsContainer}>
          {cartItems.map((item) => (
            <View key={item.id}>
              <TouchableOpacity
                style={styles.cartItem}
                onPress={() =>
                  router.push({
                    pathname: "/product-details",
                    params: { id: item.id },
                  })
                }
              >
                <Image source={{ uri: item.image }} style={styles.itemImage} />
                <View style={styles.itemDetails}>
                  <Text style={styles.itemName}>{item.name}</Text>
                  <Text style={styles.itemVariant}>
                    {item.size} • {item.color}
                  </Text>
                  <Text style={styles.itemPrice}>${item.price}</Text>
                </View>
                <View style={styles.itemActions}>
                  <TouchableOpacity
                    style={styles.removeButton}
                    onPress={() => removeItem(item.id)}
                  >
                    <Ionicons
                      name="trash-outline"
                      size={18}
                      color={COLORS.red}
                    />
                  </TouchableOpacity>
                  <View style={styles.quantityContainer}>
                    <TouchableOpacity
                      style={styles.quantityButton}
                      onPress={() => updateQuantity(item.id, -1)}
                    >
                      <Ionicons name="remove" size={16} color={COLORS.text} />
                    </TouchableOpacity>
                    <Text style={styles.quantityText}>{item.quantity}</Text>
                    <TouchableOpacity
                      style={styles.quantityButton}
                      onPress={() => updateQuantity(item.id, 1)}
                    >
                      <Ionicons name="add" size={16} color={COLORS.text} />
                    </TouchableOpacity>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          ))}
        </View>

        {/* Order Summary */}
        <View style={styles.summaryContainer}>
          <Text style={styles.summaryTitle}>Order Summary</Text>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Subtotal</Text>
            <Text style={styles.summaryValue}>${subtotal.toFixed(2)}</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Shipping</Text>
            <Text style={styles.summaryValue}>${shipping.toFixed(2)}</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.summaryRow}>
            <Text style={styles.totalLabel}>Total</Text>
            <Text style={styles.totalValue}>${total.toFixed(2)}</Text>
          </View>
        </View>

        {/* Checkout Button */}
        <TouchableOpacity style={styles.checkoutButton}>
          <Text style={styles.checkoutButtonText}>Proceed to Checkout</Text>
          <Ionicons name="arrow-forward" size={20} color={COLORS.white} />
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
  cartItemsContainer: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  cartItem: {
    flexDirection: "row",
    backgroundColor: COLORS.white,
    borderRadius: 16,
    padding: 12,
    marginBottom: 12,
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 12,
    backgroundColor: COLORS.card,
  },
  itemDetails: {
    flex: 1,
    marginLeft: 12,
    justifyContent: "center",
  },
  itemName: {
    fontSize: 16,
    fontWeight: "600",
    color: COLORS.text,
    marginBottom: 4,
  },
  itemVariant: {
    fontSize: 13,
    color: COLORS.textLight,
    marginBottom: 6,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: COLORS.text,
  },
  itemActions: {
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  removeButton: {
    padding: 4,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.card,
    borderRadius: 8,
    paddingHorizontal: 4,
  },
  quantityButton: {
    padding: 6,
  },
  quantityText: {
    fontSize: 14,
    fontWeight: "600",
    color: COLORS.text,
    marginHorizontal: 8,
    minWidth: 20,
    textAlign: "center",
  },
  summaryContainer: {
    backgroundColor: COLORS.white,
    marginHorizontal: 20,
    padding: 20,
    borderRadius: 16,
    marginBottom: 20,
  },
  summaryTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: COLORS.text,
    marginBottom: 16,
  },
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  summaryLabel: {
    fontSize: 15,
    color: COLORS.textLight,
  },
  summaryValue: {
    fontSize: 15,
    fontWeight: "600",
    color: COLORS.text,
  },
  divider: {
    height: 1,
    backgroundColor: COLORS.card,
    marginVertical: 12,
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: "700",
    color: COLORS.text,
  },
  totalValue: {
    fontSize: 20,
    fontWeight: "700",
    color: COLORS.text,
  },
  checkoutButton: {
    flexDirection: "row",
    backgroundColor: COLORS.text,
    marginHorizontal: 20,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  checkoutButtonText: {
    color: COLORS.white,
    fontSize: 17,
    fontWeight: "600",
  },
});
