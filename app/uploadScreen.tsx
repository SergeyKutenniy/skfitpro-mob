import React, { useState } from 'react';
import {
  View,
  Button,
  Image,
  Alert,
  ActivityIndicator,
  Text,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function UploadScreen() {
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [objects, setObjects] = useState<any[]>([]);

  const pickImage = async () => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permission.granted) {
      Alert.alert('Доступ до фото заборонено!');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      base64: true,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      await sendToServer(result.assets[0].base64!);
    }
  };

  const sendToServer = async (base64: string) => {
    try {
      setLoading(true);
      const response = await fetch('http://192.168.1.100:3000/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ imageBase64: base64 }),
      });

      const data = await response.json();
      setObjects(data.objects || []);
      console.log('Отримано:', data.objects);
    } catch (error) {
      console.error('Помилка відправки фото:', error);
      Alert.alert('Помилка', 'Не вдалося відправити фото.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="📸 Вибрати фото" onPress={pickImage} />

      {loading && <ActivityIndicator size="large" style={{ marginTop: 20 }} />}

      {image && (
        <Image
          source={{ uri: image }}
          style={{ width: 200, height: 200, marginTop: 20 }}
        />
      )}

      {objects.length > 0 && (
        <View style={{ marginTop: 20 }}>
          {objects.map((obj, index) => (
            <View key={index}>
              <Text>{obj.name}</Text>
            </View>
          ))}
        </View>
      )}
    </View>
  );
}
