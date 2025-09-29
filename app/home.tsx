import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function HomeScreen() {
  const user = {
    name: "Sergey",
    weeklyProgress: 0.6,
    workoutsCompleted: 4,
    caloriesBurned: 1200,
    kmRun: 15,
  };

  const quickWorkouts = [
    { title: "Кардио 20 мин" },
    { title: "Силовая тренировка" },
    { title: "Йога для спины" },
    { title: "HIIT 15 мин" },
  ];

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 20 }}>
      {/* Приветствие */}
      <Text style={styles.greeting}>Привет, {user.name}!</Text>

      {/* Статистика */}
      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Text style={styles.statValue}>{user.workoutsCompleted}</Text>
          <Text style={styles.statLabel}>Тренировок</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statValue}>{user.caloriesBurned}</Text>
          <Text style={styles.statLabel}>Калорий</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statValue}>{user.kmRun}</Text>
          <Text style={styles.statLabel}>Км</Text>
        </View>
      </View>

      {/* Кнопка начать тренировку */}
      <TouchableOpacity>
        <LinearGradient colors={["#4caf50", "#81c784"]} style={styles.startButton}>
          <Text style={styles.startButtonText}>Начать тренировку</Text>
        </LinearGradient>
      </TouchableOpacity>

      {/* Быстрые тренировки */}
      <Text style={styles.sectionTitle}>Быстрые тренировки</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {quickWorkouts.map((workout, index) => (
          <TouchableOpacity key={index} style={styles.workoutCard}>
            <Text style={styles.workoutTitle}>{workout.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#1E1E1E", padding: 20 },
  greeting: { fontSize: 24, fontWeight: "bold", color: "#FFFFFF", marginBottom: 20 },
  statsContainer: { flexDirection: "row", justifyContent: "space-between", marginBottom: 30 },
  statCard: {
    alignItems: "center",
    flex: 1,
    backgroundColor: "#2A2A2A",
    padding: 15,
    marginHorizontal: 5,
    borderRadius: 10,
  },
  statValue: { fontSize: 20, fontWeight: "bold", color: "#FFFFFF" },
  statLabel: { fontSize: 14, color: "#E0E0E0" },
  startButton: { padding: 15, borderRadius: 10, alignItems: "center", marginBottom: 30 },
  startButtonText: { color: "#FFFFFF", fontSize: 16, fontWeight: "bold" },
  sectionTitle: { fontSize: 18, fontWeight: "bold", color: "#FFFFFF", marginBottom: 15 },
  workoutCard: {
    backgroundColor: "#2A2A2A",
    padding: 20,
    borderRadius: 10,
    marginRight: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  workoutTitle: { color: "#FFFFFF", fontWeight: "bold" },
});
