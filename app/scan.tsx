import React, { useState } from "react";
import { View, Text, Button, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { SafeAreaView } from "react-native-safe-area-context";
import { globalStyles } from "../styles/theme";

export default function ScanScreen() {
  const [image, setImage] = useState<string | null>(null);

  const pickImage = async () => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permission.granted) return alert("Разрешение нужно");

    let result = await ImagePicker.launchImageLibraryAsync({ mediaTypes: ImagePicker.MediaTypeOptions.Images, allowsEditing: true, quality: 1 });
    if (!result.canceled) setImage(result.assets[0].uri);
  };

  const takePhoto = async () => {
    const permission = await ImagePicker.requestCameraPermissionsAsync();
    if (!permission.granted) return alert("Разрешение нужно");

    let result = await ImagePicker.launchCameraAsync({ allowsEditing: true, quality: 1 });
    if (!result.canceled) setImage(result.assets[0].uri);
  };

  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 1 }}>
        <Text style={{ fontSize: 22, fontWeight: "bold", color: "#fff", marginBottom: 20 }}>Сканирование фото</Text>

        <View style={{ marginVertical: 10, width: "80%" }}>
          <Button title="📂 Выбрать из галереи" onPress={pickImage} />
        </View>

        <View style={{ marginVertical: 10, width: "80%" }}>
          <Button title="📷 Сделать фото" onPress={takePhoto} />
        </View>

        {image && <Image source={{ uri: image }} style={globalStyles.imagePreview} />}
      </View>
    </SafeAreaView>
  );
}
