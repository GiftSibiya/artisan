// Dependancies Imports //
import React, { useState, useMemo } from "react";
import { View, Text, Image } from "react-native";
import MapView, { Marker } from "react-native-maps";
//

// Files Imports //
import artisans from "../assets/data/artisans.json";
import ArtisanList from "../../components/ArtisanList";
//

export default function HomeScreen() {
  const [selectedArtisan, setSelectedArtisan] = useState(null);
  // Bottom Sheet //
  const snapPoints = useMemo(() => ["25%", "50%"], []);

  const handleMarkerClick = (index) => {
    setSelectedArtisan(artisans[index]);
  };

  return (
    <View
      style={{ flex: 1, height: "100%", width: "100%", alignItems: "center" }}
    >
      <MapView
        style={{ flex: 1, height: "100%", width: "100%" }}
        initialRegion={{
          latitude: -26.003592,
          longitude: 28.178776,
          latitudeDelta: 0.2,
          longitudeDelta: 0.2,
        }}
        onPress={() => setSelectedArtisan(null)} // Use onPress for the MapView
      >
        {artisans.map((artisan, index) => (
          <Marker
            key={artisan.id}
            coordinate={{
              latitude: artisan.latitude,
              longitude: artisan.longitude,
            }}
            title={`${artisan.name} ${artisan.surname}`}
            description={`Qualified Artisan: ${artisan.qualification.qualificationName}`}
            onPress={() => handleMarkerClick(index)}
          >
            <Image
              style={{
                width: 40,
                height: 40,
                borderRadius: 20,
              }}
              source={require("../assets/logo/worker.png")}
            />
          </Marker>
        ))}
      </MapView>
      {selectedArtisan && <ArtisanList artisan={selectedArtisan} />}
    </View>
  );
}
