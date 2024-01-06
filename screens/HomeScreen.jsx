/// Import dependancies
import React from "react";
import { View, Text, Image } from "react-native";
import MapView, { Marker } from "react-native-maps";
//

/// Component import ///
import HomeComponent from "../components/HomeComponent";
import Artisans from "../assets/data/artisans.json";
import ArtisanList from "../components/ArtisanList";
//

export default function HomeScreen() {
  return (
    <View className="flex h-screen w-screen items-center">
      <MapView
        // Initial Map Location
        className="h-screen w-screen"
        initialRegion={{
          latitude: -26.003592,
          longitude: 28.178776,
          latitudeDelta: 0.2,
          longitudeDelta: 0.2,
        }}
      >
        {Artisans.map((artisan) => (
          <Marker
            key={artisan.id}
            coordinate={{
              latitude: artisan.latitude,
              longitude: artisan.longitude,
            }}
            title={`${artisan.name} ${artisan.surname}`}
            description={`Qualified Artisan: ${artisan.qualification.qualificationName}`}
          >
            <Image
              style={{
                width: 40,
                height: 40,
                // Apply NativeWind styles here
                // For example, you can use the 'rounded-full' class
                roundedFull: true,
              }}
              source={require("../assets/logo/worker.png")} // Add the source prop with the correct path to your image
            />
          </Marker>
        ))}
      </MapView>
      <ArtisanList artisan={Artisans[0]} />
      <View className="absolute bottom-0">
        <HomeComponent className="relative border-2" />
      </View>
    </View>
  );
}
