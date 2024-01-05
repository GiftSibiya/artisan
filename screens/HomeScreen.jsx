import { View, Text } from "react-native";
import React from "react";
import MapView, { Marker } from "react-native-maps";
import HomeComponent from "../components/HomeComponent";
import Artisans from "../assets/data/artisans.json";

export default function HomeScreen() {
  return (
    <View className="flex h-screen w-screen  items-center">
      <MapView
        // Initial Map Location
        className=" h-screen w-screen "
        initialRegion={{
          latitude: -26.003592,
          longitude: 28.178776,
          latitudeDelta: 0.2,
          longitudeDelta: 0.2,
        }}
      >
        {Artisans.map((artisan) => (
          <Marker
            key={artisan.email} // Add a unique key to each Marker
            coordinate={{
              latitude: artisan.latitude,
              longitude: artisan.longitude,
            }}
            title={`${artisan.name} ${artisan.surname}`}
            description={`Qualified Artisan: ${artisan.qualification.qualificationName}`}
          />
        ))}
      </MapView>
      <View className="absolute bottom-0">
        <HomeComponent className="relative border-2" />
      </View>
    </View>
  );
}
