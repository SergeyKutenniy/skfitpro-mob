import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { Alert, Button, FlatList, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [seconds, setSeconds] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    const loadSessions = async () => {
      const saved = await AsyncStorage.getItem('sessions');
      if (saved) setSessions(JSON.parse(saved));
    };
    loadSessions();
  }, []);

  useEffect(() => {
    return () => clearInterval(intervalId);
  }, [intervalId]);

  const start = () => {
    if (intervalId) return;
    const id = setInterval(() => setSeconds(s => s + 1), 1000);
    setIntervalId(id);
  };

  const stop = () => {
    clearInterval(intervalId);
    setIntervalId(null);
  };

  const reset = () => {
    stop();
    setSeconds(0);
  };

  const saveSession = async () => {
    const newSession = { date: new Date().toLocaleString(), duration: seconds };
    const updated = [newSession, ...sessions];
    setSessions(updated);
    await AsyncStorage.setItem('sessions', JSON.stringify(updated));
    Alert.alert('Session saved!', `Duration: ${seconds} sec`);
    reset();
  };

  const format = (s) => {
    const m = Math.floor(s / 60).toString().padStart(2, '0');
    const sec = (s % 60).toString().padStart(2, '0');
    return `${m}:${sec}`;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Workout Timer</Text>
      <Text style={styles.timer}>{format(seconds)}</Text>
      <View style={styles.buttons}>
        <Button title="Start" onPress={start} />
        <Button title="Stop" onPress={stop} />
        <Button title="Reset" onPress={reset} />
        <Button title="Save" onPress={saveSession} />
      </View>
      <Text style={styles.historyTitle}>History</Text>
      <FlatList
        data={sessions}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <Text>{item.date} — {format(item.duration)}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', paddingTop: 50, paddingHorizontal: 20 },
  title: { fontSize: 32, marginBottom: 20 },
  timer: { fontSize: 48, marginVertical: 20 },
  buttons: { flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginBottom: 20 },
  historyTitle: { fontSize: 24, marginBottom: 10 },
});
