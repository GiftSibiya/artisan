import { View, Image } from "react-native";
import React from "react";

const CustomMarker = ({ item }) => {
  return (
    <View className="h-[50] w-[50] bg-white rounded-full">
      <Image
        className="h-[50] w-[50] rounded-full"
        image={require("../assets/logo/facebook.png")}
      />
    </View>
  );
};

export default CustomMarker;
