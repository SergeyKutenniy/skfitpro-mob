import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";


export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: "#111" },
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#666",
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
  name="coach"
  options={{
    title: "Coach",
    tabBarIcon: ({ color, size }) => (
      <Ionicons name="barbell" color={color} size={size} />
    ),
  }}
/>

<Tabs.Screen
  name="index"
  options={{
    href: null, // 🔹 скрываем из нижнего меню
  }}
/>

<Tabs.Screen
        name="scan"
        options={{
          title: "Scan",
          tabBarIcon: ({ color, size }) => (
          <Ionicons name="camera-outline" size={size} color={color} />
        ),
        }}
      />
      
      <Tabs.Screen
        name="notifications"
        options={{
          title: "Notifications",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="notifications" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}
