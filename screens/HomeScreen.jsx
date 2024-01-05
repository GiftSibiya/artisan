import { View, Text } from "react-native";
import React from "react";
import MapView from "react-native-maps";
import HomeComponent from "../components/HomeComponent";

export default function HomeScreen() {
  return (
    <View className="flex h-screen w-screen  items-center">
      <MapView className=" h-screen w-screen "></MapView>
      <View className="absolute bottom-0">
        <HomeComponent className="relative border-2" />
      </View>
    </View>
  );
}
