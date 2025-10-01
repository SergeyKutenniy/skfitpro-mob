import React from "react";
import { ScrollView, Text, ImageBackground, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { globalStyles, COLORS } from "../styles/theme";

export default function CoachScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <ScrollView style={globalStyles.container} contentContainerStyle={globalStyles.scrollContent}>
        <Text style={globalStyles.title}>Training Journeys</Text>

        <ImageBackground
          source={{ uri: "https://picsum.photos/600/400?random=1" }}
          style={[globalStyles.card, { height: 220 }]}
          imageStyle={{ borderRadius: 16 }}
        >
          <View style={globalStyles.overlay}>
            <Text style={{ color: COLORS.textPrimary, fontSize: 14 }}>12 weeks</Text>
            <Text style={{ color: COLORS.textPrimary, fontSize: 24, fontWeight: "bold" }}>FIT & TONED</Text>
            <Text style={{ color: COLORS.textSecondary, fontSize: 14, marginTop: 4 }}>Cardio • Muscle</Text>
            <TouchableOpacity style={globalStyles.button}>
              <Text style={globalStyles.buttonText}>COACH RECOMMENDATION</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>

        <Text style={globalStyles.subtitle}>Get started</Text>
        <Text style={globalStyles.text}>
          Learn the basics of fitness with Training Journeys designed for beginners.
        </Text>

        <ImageBackground
          source={{ uri: "https://picsum.photos/600/400?random=2" }}
          style={[globalStyles.card, { height: 220 }]}
          imageStyle={{ borderRadius: 16 }}
        >
          <View style={globalStyles.overlay}>
            <Text style={{ color: COLORS.textPrimary, fontSize: 14 }}>6 weeks</Text>
            <Text style={{ color: COLORS.textPrimary, fontSize: 24, fontWeight: "bold" }}>15 MINUTE FITNESS</Text>
            <Text style={{ color: COLORS.textSecondary, fontSize: 14, marginTop: 4 }}>Cardio • Muscle</Text>
          </View>
        </ImageBackground>

      </ScrollView>
    </SafeAreaView>
  );
}
