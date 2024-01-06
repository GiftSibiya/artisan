import { Text, View, Image } from "react-native";
import React, { Component } from "react";
import Artisans from "../assets/data/artisans.json";
import { SafeAreaView } from "react-native-safe-area-context";

export class WorkOrder extends Component {
  render() {
    return (
      <View>
        {Artisans.map((artisan) => (
          <View key={artisan.id}>
            <Text>
              {`${artisan.name} ${artisan.surname}`}
              {`Qualified Artisan: ${artisan.qualification.qualificationName}`}
            </Text>
            <Image
              style={{ width: 40, height: 40 }}
              source={require("../assets/logo/facebook.png")}
            />
          </View>
        ))}
      </View>
    );
  }
}

export default WorkOrder;
