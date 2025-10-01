import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { globalStyles } from "../styles/theme";

export default function ExploreScreen() {
  return (
    <SafeAreaView style={globalStyles.safeArea}>
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#111" }}>
    <Text style={{ color: "#fff", fontSize: 22 }}>Explore Page</Text>
  </View>
</SafeAreaView>

  );
}
