import { StyleSheet } from "react-native";

export const COLORS = {
  background: "#111",
  cardBackground: "#2A2A2A",
  primary: "#007AFF",
  secondary: "#4CAF50",
  textPrimary: "#fff",
  textSecondary: "#ccc",
  textMuted: "#666",
};

export const FONTS = {
  title: 30,
  subtitle: 22,
  body: 16,
  small: 12,
};

export const SIZES = {
  padding: 16,
  cardRadius: 16,
  buttonRadius: 8,
};

export const globalStyles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  container: {
    flex: 1,
    paddingHorizontal: SIZES.padding,
    paddingTop: SIZES.padding,
    backgroundColor: COLORS.background,
  },
  scrollContent: {
    paddingBottom: 40,
  },
  title: {
    fontSize: FONTS.title,
    fontWeight: "bold",
    color: COLORS.textPrimary,
    marginBottom: 24,
  },
  subtitle: {
    fontSize: FONTS.subtitle,
    fontWeight: "600",
    color: COLORS.textPrimary,
    marginTop: 32,
    marginBottom: 12,
  },
  text: {
    fontSize: FONTS.body,
    color: COLORS.textSecondary,
    marginBottom: 24,
    lineHeight: 22,
  },
  card: {
    borderRadius: SIZES.cardRadius,
    overflow: "hidden",
    marginBottom: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 8,
  },
  overlay: {
    flex: 1,
    justifyContent: "flex-end",
    padding: SIZES.padding,
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  button: {
    backgroundColor: COLORS.primary,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: SIZES.buttonRadius,
    marginTop: 12,
    alignSelf: "flex-start",
  },
  buttonText: {
    color: COLORS.textPrimary,
    fontSize: FONTS.small,
    fontWeight: "600",
  },
  scanButton: {
    backgroundColor: COLORS.primary,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 40,
    marginBottom: 40,
  },
  scanButtonText: {
    color: COLORS.textPrimary,
    fontSize: 18,
    fontWeight: "bold",
  },
  imagePreview: {
    width: 250,
    height: 250,
    borderRadius: SIZES.cardRadius,
    marginTop: 20,
  },
});
