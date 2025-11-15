import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

export const COLORS = {
  background: "#FDF5FF",
  primary: "#FFB6E1",
  secondary: "#D8B4E2",
  text: "#1A1A1A",
  textLight: "#666666",
  white: "#FFFFFF",
  card: "#F5E6FF",
  gold: "#FFD700",
  red: "#FF4D67",
};

export const SIZES = {
  xs: 10,
  sm: 12,
  md: 14,
  base: 16,
  lg: 18,
  xl: 20,
  xxl: 24,
  xxxl: 28,
};

export const SPACING = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
  xxxl: 32,
};

export const RADIUS = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
  round: 999,
};

export const SCREEN = {
  width,
  height,
};

export const commonStyles = StyleSheet.create({
  // Container styles
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  centerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.background,
  },
  paddedContainer: {
    flex: 1,
    padding: SPACING.xl,
    backgroundColor: COLORS.background,
  },

  // Card styles
  card: {
    backgroundColor: COLORS.white,
    borderRadius: RADIUS.lg,
    padding: SPACING.lg,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  cardLight: {
    backgroundColor: COLORS.card,
    borderRadius: RADIUS.lg,
    padding: SPACING.lg,
  },

  // Button styles
  button: {
    backgroundColor: COLORS.text,
    borderRadius: RADIUS.xxl,
    paddingVertical: SPACING.lg,
    paddingHorizontal: SPACING.xxl,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonPrimary: {
    backgroundColor: COLORS.primary,
    borderRadius: RADIUS.xxl,
    paddingVertical: SPACING.lg,
    paddingHorizontal: SPACING.xxl,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonOutline: {
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: COLORS.text,
    borderRadius: RADIUS.xxl,
    paddingVertical: SPACING.lg,
    paddingHorizontal: SPACING.xxl,
    justifyContent: "center",
    alignItems: "center",
  },
  iconButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: COLORS.white,
    justifyContent: "center",
    alignItems: "center",
  },

  // Text styles
  title: {
    fontSize: SIZES.xxl,
    fontWeight: "bold",
    color: COLORS.text,
  },
  subtitle: {
    fontSize: SIZES.lg,
    fontWeight: "600",
    color: COLORS.text,
  },
  body: {
    fontSize: SIZES.base,
    color: COLORS.text,
    lineHeight: 22,
  },
  bodyLight: {
    fontSize: SIZES.base,
    color: COLORS.textLight,
    lineHeight: 22,
  },
  caption: {
    fontSize: SIZES.sm,
    color: COLORS.textLight,
  },
  buttonText: {
    fontSize: SIZES.lg,
    fontWeight: "600",
    color: COLORS.white,
  },

  // Input styles
  input: {
    borderWidth: 1,
    borderColor: COLORS.primary,
    borderRadius: RADIUS.md,
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.md,
    fontSize: SIZES.base,
    color: COLORS.text,
    backgroundColor: COLORS.white,
  },
  inputFocused: {
    borderColor: COLORS.text,
    borderWidth: 2,
  },
  inputError: {
    borderColor: COLORS.red,
  },

  // Layout helpers
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  rowCenter: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  column: {
    flexDirection: "column",
  },

  // Spacing helpers
  mt1: { marginTop: SPACING.xs },
  mt2: { marginTop: SPACING.sm },
  mt3: { marginTop: SPACING.md },
  mt4: { marginTop: SPACING.lg },
  mt5: { marginTop: SPACING.xl },

  mb1: { marginBottom: SPACING.xs },
  mb2: { marginBottom: SPACING.sm },
  mb3: { marginBottom: SPACING.md },
  mb4: { marginBottom: SPACING.lg },
  mb5: { marginBottom: SPACING.xl },

  px1: { paddingHorizontal: SPACING.xs },
  px2: { paddingHorizontal: SPACING.sm },
  px3: { paddingHorizontal: SPACING.md },
  px4: { paddingHorizontal: SPACING.lg },
  px5: { paddingHorizontal: SPACING.xl },

  py1: { paddingVertical: SPACING.xs },
  py2: { paddingVertical: SPACING.sm },
  py3: { paddingVertical: SPACING.md },
  py4: { paddingVertical: SPACING.lg },
  py5: { paddingVertical: SPACING.xl },

  // Shadow styles
  shadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  shadowLg: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 5,
  },

  // Image styles
  imageRound: {
    borderRadius: RADIUS.round,
  },
  imageCover: {
    resizeMode: "cover",
  },
  imageContain: {
    resizeMode: "contain",
  },
});

export const createCircleButton = (size: number) => ({
  width: size,
  height: size,
  borderRadius: size / 2,
  backgroundColor: COLORS.white,
  justifyContent: "center" as const,
  alignItems: "center" as const,
});

export const createRoundedContainer = (radius: number) => ({
  borderRadius: radius,
  overflow: "hidden" as const,
});
