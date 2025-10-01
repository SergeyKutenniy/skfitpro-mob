import React, { useEffect, useRef } from "react";
import { View, Text, Image, TouchableOpacity, Animated } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { globalStyles, COLORS } from "../styles/theme";
import { SafeAreaView } from "react-native-safe-area-context";

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
    <SafeAreaView style={globalStyles.safeArea}>
      <View style={{ flex: 1, padding: 20 }}>
        <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 30 }}>
          <Image source={{ uri: user.avatar }} style={{ width: 70, height: 70, borderRadius: 35 }} />
          <View style={{ marginLeft: 15 }}>
            <Text style={{ fontSize: 22, fontWeight: "bold", color: COLORS.textPrimary }}>{user.name}</Text>
            <Text style={{ fontSize: 16, color: COLORS.textSecondary }}>{user.level}</Text>
          </View>
          <TouchableOpacity style={{ marginLeft: "auto" }}>
            <Ionicons name="settings-outline" size={28} color={COLORS.textSecondary} />
          </TouchableOpacity>
        </View>

        <Text style={{ fontSize: 18, color: COLORS.textPrimary, marginBottom: 10 }}>Прогресс на этой неделе</Text>
        <View style={{ height: 10, backgroundColor: "#333", borderRadius: 5, marginBottom: 5 }}>
          <Animated.View style={{ height: 10, backgroundColor: COLORS.secondary, borderRadius: 5, width: progressWidth }} />
        </View>
        <Text style={{ fontSize: 14, color: COLORS.textSecondary, marginBottom: 30 }}>{Math.round(weeklyProgress * 100)}%</Text>

        <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 30 }}>
          {[
            { label: "Тренировок", value: user.workoutsCompleted },
            { label: "Калорий", value: user.caloriesBurned },
            { label: "Км", value: user.kmRun },
          ].map((stat, index) => (
            <Animated.View key={index} style={{ alignItems: "center", flex: 1, backgroundColor: COLORS.cardBackground, padding: 15, marginHorizontal: 5, borderRadius: 10, shadowColor: "#000", shadowOpacity: 0.3, shadowOffset: { width: 0, height: 2 }, shadowRadius: 4, elevation: 3, opacity: progressAnim }}>
              <Text style={{ fontSize: 20, fontWeight: "bold", color: COLORS.textPrimary }}>{stat.value}</Text>
              <Text style={{ fontSize: 14, color: COLORS.textSecondary }}>{stat.label}</Text>
            </Animated.View>
          ))}
        </View>

        <TouchableOpacity>
          <LinearGradient colors={[COLORS.secondary, "#81c784"]} style={{ padding: 15, borderRadius: 10, alignItems: "center" }}>
            <Text style={{ color: COLORS.textPrimary, fontSize: 16, fontWeight: "bold" }}>Начать тренировку</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
