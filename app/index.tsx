import React from "react";
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Training Journeys</Text>

      {/* Первая карточка */}
      <ImageBackground
        source={{ uri: "https://picsum.photos/600/400?random=1" }}
        style={styles.card}
        imageStyle={{ borderRadius: 12 }}
      >
        <View style={styles.overlay}>
          <Text style={styles.cardWeeks}>12 weeks</Text>
          <Text style={styles.cardTitle}>FIT & TONED</Text>
          <Text style={styles.cardTags}>Cardio • Muscle</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>COACH RECOMMENDATION</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>

      <Text style={styles.subtitle}>Get started</Text>
      <Text style={styles.text}>
        Learn the basics of fitness with Training Journeys designed for
        beginners.
      </Text>

      {/* Вторая карточка */}
      <ImageBackground
        source={{ uri: "https://picsum.photos/600/400?random=2" }}
        style={styles.card}
        imageStyle={{ borderRadius: 12 }}
      >
        <View style={styles.overlay}>
          <Text style={styles.cardWeeks}>6 weeks</Text>
          <Text style={styles.cardTitle}>15 MINUTE FITNESS</Text>
          <Text style={styles.cardTags}>Cardio • Muscle</Text>
        </View>
      </ImageBackground>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#111", padding: 16 },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 22,
    fontWeight: "600",
    color: "#fff",
    marginTop: 20,
    marginBottom: 6,
  },
  text: { fontSize: 16, color: "#ccc", marginBottom: 20 },
  card: {
    height: 220,
    borderRadius: 12,
    marginBottom: 20,
    overflow: "hidden",
  },
  overlay: {
    flex: 1,
    justifyContent: "flex-end",
    padding: 16,
    backgroundColor: "rgba(0,0,0,0.35)",
    borderRadius: 12,
  },
  cardWeeks: { color: "#fff", fontSize: 14, marginBottom: 4 },
  cardTitle: { color: "#fff", fontSize: 22, fontWeight: "bold" },
  cardTags: { color: "#ddd", fontSize: 14, marginTop: 4 },
  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
    marginTop: 10,
    alignSelf: "flex-start",
  },
  buttonText: { color: "#fff", fontSize: 12, fontWeight: "600" },
});
