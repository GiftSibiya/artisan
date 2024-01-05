import { Text, TextInput, View } from "react-native";
import React, { Component } from "react";

export class HomeComponent extends Component {
  render() {
    return (
      <View className="flex flex-col items-center w-[95vw] bg-blue-600 h-[35vh] rounded-2xl">
        <View className="w-[100px] rounded-full mt-1 bg-white h-[3px]"></View>
        <TextInput
          className="m-2 bg-slate-200  border-black w-[70vw] h-[50px] rounded-2xl p-2"
          placeholder="Search"
        ></TextInput>
        <Text className="text-white font-semibold">Artisans Near You</Text>
      </View>
    );
  }
}

export default HomeComponent;
