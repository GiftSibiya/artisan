import { ScrollView, Text, View, Image } from "react-native";
import React from "react";
import artisans from "../assets/data/artisans.json";

const WorkOrder = () => {
  const firstThreeArtisans = artisans.slice(0, 3);

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      {firstThreeArtisans.map((artisan, index) => (
        <View className="flex m-2 rounded-lg overflow-hidden" key={index}>
          <View className="flex flex-row">
            <Image
              className="w-[40vw] h-[20vh] rounded-xl"
              source={{ uri: artisan.image }}
            />
            <View className="mx-5">
              <Text className="font-bold">{`${artisan.name} ${artisan.surname}`}</Text>
              <Text className="font-bold">{`${artisan.qualification.qualificationName}`}</Text>
              <Text>
                <Text className="font-bold">Availability:</Text>{" "}
                {` ${artisan.available}`}
              </Text>
              <Text className="text-[12px]">{`Skills: ${artisan.skills.join(
                ", "
              )}`}</Text>
              <Text className="font-[12] mt-2">
                <Text className="font-bold mt-2">Contact</Text>{" "}
                {`${artisan.phoneNumber}`}
              </Text>
              <Text
                className={
                  artisan.WorkDate === "ON-SITE"
                    ? "bg-green-600 p-2 rounded-2xl text-center text-white font-bold"
                    : "bg-orange-300 p-2 rounded-2xl text-center font-bold"
                }
              >
                Schedule: {artisan.WorkDate}
              </Text>
              <Text className="text-[15px] text-blue-600 mt-1 ">
                View Profile
              </Text>
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default WorkOrder;
