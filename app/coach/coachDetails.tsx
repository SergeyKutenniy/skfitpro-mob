import React from "react";
import { Text, ScrollView, ImageBackground, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { globalStyles, COLORS } from "../../styles/theme";

export default function CoachDetailsScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <ScrollView style={globalStyles.container} contentContainerStyle={globalStyles.scrollContent}>
        
        {/* 🔹 Баннер программы */}
        <ImageBackground
          source={{ uri: "https://picsum.photos/600/300?random=3" }}
          style={[globalStyles.card, { height: 180, marginBottom: 20 }]}
          imageStyle={{ borderRadius: 16 }}
        >
          <Text style={{
            color: COLORS.textPrimary,
            fontSize: 24,
            fontWeight: "bold",
            position: "absolute",
            bottom: 16,
            left: 16
          }}>
            FIT & TONED
          </Text>
        </ImageBackground>

        {/* Заголовок и описание */}
        <Text style={globalStyles.subtitle}>12-недельная программа</Text>
        <Text style={globalStyles.text}>
          Эта программа рассчитана на 12 недель и направлена на улучшение общей
          физической формы. Она сочетает в себе кардио и силовые тренировки,
          которые помогут тебе сжечь жир, укрепить мышцы и выработать
          устойчивую привычку к регулярным занятиям спортом.
        </Text>

        {/* Преимущества */}
        <Text style={globalStyles.subtitle}>Что тебя ждёт:</Text>
        <Text style={globalStyles.text}>• Кардио для выносливости</Text>
        <Text style={globalStyles.text}>• Силовые упражнения для тонуса</Text>
        <Text style={globalStyles.text}>• Балансированные тренировки 4 раза в неделю</Text>
        <Text style={globalStyles.text}>• Подходит для всех уровней подготовки</Text>

        {/* Кнопка начать */}
        <TouchableOpacity
          style={[globalStyles.button, { marginTop: 30 }]}
          onPress={() => router.push("/workout/start")}
        >
          <Text style={globalStyles.buttonText}>Начать программу</Text>
        </TouchableOpacity>

        {/* Кнопка назад */}
        <TouchableOpacity
          style={[globalStyles.button, { backgroundColor: COLORS.secondary, marginTop: 15 }]}
          onPress={() => router.back()}
        >
          <Text style={globalStyles.buttonText}>Назад</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
