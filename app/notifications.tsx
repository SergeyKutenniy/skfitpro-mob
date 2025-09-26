import { View, Text, StyleSheet } from "react-native";

export default function Feed() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Notifications Page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#111" },
  text: { color: "#fff", fontSize: 20 },
});