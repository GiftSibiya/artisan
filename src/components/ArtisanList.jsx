// Dependencies Import //
import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
//--//

const ArtisanList = ({ artisan }) => {
  const navigation = useNavigation();

  viewProfile = () => {
    navigation.navigate("ArtisanProfile");
  };

  const handleListCancel = () => {};

  return (
    <View className="flex flex-row absolute top-[20px] w-[90vw] rounded-xl h-[18vh] bg-white aspect-square overflow-hidden ">
      <View></View>
      <TouchableOpacity
        onPress={handleListCancel}
        className="absolute bg-red bottom-0 right-[0px]"
      ></TouchableOpacity>
      <Image
        className="w-[150px] rounded-2xl h-[200px]"
        source={{ uri: artisan.image }}
      />
      <View className="m-2">
        <Text className="font-bold">{`${artisan.name} ${artisan.surname}`}</Text>
        <Text className="text-[10px] font-bold">{`${artisan.qualification.qualificationName}`}</Text>
        <Text className="text-[12px]">
          <Text className="font-bold">availability:</Text>{" "}
          {` ${artisan.available}`}
        </Text>
        <Text className="text-[12px]">{`skills: ${artisan.skills}`}</Text>
        <Text className="text-[12px] mt-4">
          <Text className="text-[12px] font-bold">Contact</Text>{" "}
          {`${artisan.phoneNumber}`}
        </Text>
        <TouchableOpacity onPress={viewProfile}>
          <Text className="text-blue-700 text-center"> View Profile </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ArtisanList;
