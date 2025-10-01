import React, { useRef, useEffect, useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, Animated } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, globalStyles } from "../styles/theme";

export default function NotificationsScreen() {
  const initialNotifications = [
    { id: 1, title: "Время тренировки", description: "Начни HIIT 20 минут", date: "Сегодня" },
    { id: 2, title: "Поздравляем!", description: "Ты достиг цели недели", date: "Сегодня" },
    { id: 3, title: "Напоминание", description: "Не забудь разминку перед тренировкой", date: "Вчера" },
  ];

  const [notifications, setNotifications] = useState(initialNotifications);

  const animatedValues = useRef(
    notifications.reduce((acc: any, notif) => {
      acc[notif.id] = new Animated.Value(0);
      return acc;
    }, {})
  ).current;

  useEffect(() => {
    notifications.forEach((notif, index) => {
      Animated.timing(animatedValues[notif.id], {
        toValue: 1,
        duration: 500,
        delay: index * 150,
        useNativeDriver: true,
      }).start();
    });
  }, [notifications, animatedValues]);

  const removeNotification = (id: number) => setNotifications(prev => prev.filter(n => n.id !== id));

  const groupedNotifications = notifications.reduce((acc: any, notif) => {
    if (!acc[notif.date]) acc[notif.date] = [];
    acc[notif.date].push(notif);
    return acc;
  }, {});

  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <ScrollView style={{ flex: 1, padding: 20 }}>
        {Object.keys(groupedNotifications).map(section => (
          <View key={section} style={{ marginBottom: 25 }}>
            <Text style={{ fontSize: 18, fontWeight: "bold", color: COLORS.textPrimary, marginBottom: 10 }}>{section}</Text>
            {groupedNotifications[section].map((notif: any) => (
              <Animated.View
                key={notif.id}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  backgroundColor: COLORS.cardBackground,
                  padding: 15,
                  borderRadius: 10,
                  marginBottom: 10,
                  opacity: animatedValues[notif.id],
                  transform: [{ translateY: animatedValues[notif.id].interpolate({ inputRange: [0, 1], outputRange: [20, 0] }) }],
                }}
              >
                <Ionicons name="notifications-outline" size={24} color={COLORS.secondary} style={{ marginRight: 10 }} />
                <View style={{ flex: 1 }}>
                  <Text style={{ fontSize: 16, fontWeight: "bold", color: COLORS.textPrimary }}>{notif.title}</Text>
                  <Text style={{ fontSize: 14, color: COLORS.textSecondary }}>{notif.description}</Text>
                </View>
                <TouchableOpacity onPress={() => removeNotification(notif.id)}>
                  <Ionicons name="close" size={20} color="#E0E0E0" />
                </TouchableOpacity>
              </Animated.View>
            ))}
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
