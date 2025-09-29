import React, { useEffect, useRef } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Animated } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export default function ProfileScreen() {
  const weeklyProgress = 0.6;
  const progressAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(progressAnim, {
      toValue: weeklyProgress,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }, [weeklyProgress, progressAnim]);

  const user = {
    name: "Sergey Kutenniy",
    level: "Pro",
    avatar: "https://i.pravatar.cc/150?img=3",
    workoutsCompleted: 4,
    caloriesBurned: 1200,
    kmRun: 15,
  };

  const progressWidth = progressAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0%", "100%"],
  });

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={{ uri: user.avatar }} style={styles.avatar} />
        <View style={{ marginLeft: 15 }}>
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.level}>{user.level}</Text>
        </View>
        <TouchableOpacity style={styles.settingsButton}>
          <Ionicons name="settings-outline" size={28} color="#E0E0E0" />
        </TouchableOpacity>
      </View>

      {/* Animated Progress */}
      <View style={styles.progressSection}>
        <Text style={styles.sectionTitle}>Прогресс на этой неделе</Text>
        <View style={styles.progressBarBackground}>
          <Animated.View style={[styles.progressBarFill, { width: progressWidth }]} />
        </View>
        <Text style={styles.progressText}>{Math.round(weeklyProgress * 100)}%</Text>
      </View>

      {/* Stats Cards */}
      <View style={styles.statsContainer}>
        {[
          { label: "Тренировок", value: user.workoutsCompleted },
          { label: "Калорий", value: user.caloriesBurned },
          { label: "Км", value: user.kmRun },
        ].map((stat, index) => (
          <Animated.View key={index} style={[styles.statCard, { opacity: progressAnim }]}>
            <Text style={styles.statValue}>{stat.value}</Text>
            <Text style={styles.statLabel}>{stat.label}</Text>
          </Animated.View>
        ))}
      </View>

      {/* Start Workout Button */}
      <TouchableOpacity>
        <LinearGradient
          colors={["#4caf50", "#81c784"]}
          style={styles.startButton}
        >
          <Text style={styles.startButtonText}>Начать тренировку</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#1E1E1E" },
  header: { flexDirection: "row", alignItems: "center", marginBottom: 30 },
  avatar: { width: 70, height: 70, borderRadius: 35 },
  name: { fontSize: 22, fontWeight: "bold", color: "#FFFFFF" },
  level: { fontSize: 16, color: "#E0E0E0" },
  settingsButton: { marginLeft: "auto" },
  progressSection: { marginBottom: 30 },
  sectionTitle: { fontSize: 18, marginBottom: 10, color: "#FFFFFF" },
  progressBarBackground: { height: 10, backgroundColor: "#333", borderRadius: 5 },
  progressBarFill: { height: 10, backgroundColor: "#4caf50", borderRadius: 5 },
  progressText: { marginTop: 5, fontSize: 14, color: "#E0E0E0" },
  statsContainer: { flexDirection: "row", justifyContent: "space-between", marginBottom: 30 },
  statCard: {
    alignItems: "center",
    flex: 1,
    backgroundColor: "#2A2A2A",
    padding: 15,
    marginHorizontal: 5,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  statValue: { fontSize: 20, fontWeight: "bold", color: "#FFFFFF" },
  statLabel: { fontSize: 14, color: "#E0E0E0" },
  startButton: { padding: 15, borderRadius: 10, alignItems: "center" },
  startButtonText: { color: "#FFFFFF", fontSize: 16, fontWeight: "bold" },
});
