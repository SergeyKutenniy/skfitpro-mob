import React, { useState } from "react";
import { View, Text, Button, Image, Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { SafeAreaView } from "react-native-safe-area-context";
import { globalStyles } from "../styles/theme";

const SERVER_URL = "https://your-server.example.com"; // подставь свой сервер

export default function ScanScreen() {
  const [image, setImage] = useState<string | null>(null);
  const [result, setResult] = useState<any | null>(null);

  const pickImage = async () => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permission.granted) {
      Alert.alert("Разрешение нужно");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 0.8,
      base64: true,
    });

    if (!result.canceled) {
      const uri = result.assets[0].uri;
      const base64 = result.assets[0].base64;
      setImage(uri);

      try {
        const resp = await fetch(`${SERVER_URL}/api/scan`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ imageBase64: base64 }),
        });
        const data = await resp.json();
        console.log("scan result:", data);
        setResult(data);
      } catch (err) {
        console.error(err);
        Alert.alert("Ошибка", "Не удалось распознать изображение");
      }
    }
  };

  const takePhoto = async () => {
    const permission = await ImagePicker.requestCameraPermissionsAsync();
    if (!permission.granted) {
      Alert.alert("Разрешение нужно");
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      quality: 0.8,
      base64: true,
    });

    if (!result.canceled) {
      const uri = result.assets[0].uri;
      const base64 = result.assets[0].base64;
      setImage(uri);

      try {
        const resp = await fetch(`${SERVER_URL}/api/scan`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ imageBase64: base64 }),
        });
        const data = await resp.json();
        console.log("scan result:", data);
        setResult(data);
      } catch (err) {
        console.error(err);
        Alert.alert("Ошибка", "Не удалось распознать изображение");
      }
    }
  };

  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 1 }}>
        <Text style={{ fontSize: 22, fontWeight: "bold", color: "#fff", marginBottom: 20 }}>
          Сканирование фото
        </Text>

        <View style={{ marginVertical: 10, width: "80%" }}>
          <Button title="📂 Выбрать из галереи" onPress={pickImage} />
        </View>

        <View style={{ marginVertical: 10, width: "80%" }}>
          <Button title="📷 Сделать фото" onPress={takePhoto} />
        </View>

        {image && <Image source={{ uri: image }} style={globalStyles.imagePreview} />}

        {result && (
          <View style={{ marginTop: 20 }}>
            <Text style={{ color: "#fff", fontSize: 16 }}>🍽️ Продукт: {result.chosen?.name}</Text>
            <Text style={{ color: "#fff" }}>Калории: {result.chosen?.calories}</Text>
            <Text style={{ color: "#fff" }}>Белки: {result.chosen?.protein}</Text>
            <Text style={{ color: "#fff" }}>Жиры: {result.chosen?.fat}</Text>
            <Text style={{ color: "#fff" }}>Углеводы: {result.chosen?.carbs}</Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}
