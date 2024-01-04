import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex h-screen justify-center items-center bg-orange-500">
      <Text>The stuff is running as well as it should</Text>
      <StatusBar style="auto" />
    </View>
  );
}
