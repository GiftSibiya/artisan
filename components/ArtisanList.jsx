import { View, Text, Image } from "react-native";
import React from "react";

const ArtisanList = ({ artisan }) => {
  console.log(artisan);
  console.log(artisan.image);

  return (
    <View className="flex flex-row absolute top-[20px] w-[90vw] rounded-xl h-[18vh] bg-white aspect-square overflow-hidden ">
      <Image
        className="w-[150px] rounded-2xl h-[200px]"
        source={{ uri: artisan.image }}
      />
      <View className="m-2">
        <Text>{`${artisan.name} ${artisan.surname}`}</Text>
        <Text className="text-[10px]">{`${artisan.qualification.qualificationName}`}</Text>
        <Text className="text-[12px]">{`availability: ${artisan.available}`}</Text>
        <Text className="text-[12px]">{`skills: ${artisan.skills}`}</Text>
        <Text className="text-[12px] mt-4">{`contact: ${artisan.phoneNumber}`}</Text>
        <Text className="text-[12px] mt-1">View Profile</Text>
      </View>
    </View>
  );
};

export default ArtisanList;
