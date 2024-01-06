import { Text, View, Image } from "react-native";
import React, { Component } from "react";

export class Profile extends Component {
  render() {
    return (
      <View className="flex flex-col w-screen h-screen justify-between bg-blue-900">
        {/* Top Bar */}
        <View className="h- w-screen ">
          {/* First Row */}
          <View className="flex flex-row w-screen mt-[5vh] h-[20vh] ">
            <Image
              className="m-2 rounded-full h-[32vw] w-[32vw]"
              source={require("../assets/images/portrait1.jpg")}
            />
            <View className="m-2 ">
              <Text className="text-white text-xl text-center w-[50vw] ">
                User Name
              </Text>
              <Text className="text-white text-sm text-center w-[50vw] mb-5 ">
                Artisan and Electrician
              </Text>
              <Text className="text-white  text-sm w-[50vw]  ">
                Location: Tembisa, Maokeng
              </Text>
              <Text className="text-white text-sm w-[50vw]  ">
                Cell: 012 345 6789
              </Text>
              <Text className="text-white text-sm  w-[50vw]  ">
                Email User.Name@gmail.com
              </Text>
            </View>
          </View>
          {/*  */}
          <View className="flex flex-row w-screen mt-[1vh] h-[12vh] "></View>
        </View>
        {/* Bottom bar */}
      </View>
    );
  }
}

export default Profile;
