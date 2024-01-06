// Dependencies Import //
import { View, Text, Image } from "react-native";
import React from "react";

//--//
// File Imports //

//--//

const ArtisanProfile = () => {
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
        <View className="flex flex-row w-screen mt-[1vh] h-[12vh] ">
          <View className="flex m-2 justify-center items-center w-[20vw] border-[1px] rounded-2xl">
            <Text className="text-center text-white text-sm">Jobs</Text>
            <Text className="text-center text-white text-3xl">15</Text>
          </View>
        </View>
      </View>
      {/* Bottom bar */}
      <View className="h-[60vh] items-center w-screen rounded-t-3xl  bg-white">
        <Text className="text-center m-3 text-xl font-bold">
          Qualifications:
        </Text>
        <View className="">
          <View className="flex flex-row w-[90vw] justify-around bg-slate-300 rounded-lg p-2 h-[15vh] ">
            <Image
              className="m-2 rounded-full h-[20vw] w-[20vw]"
              source={require("../assets/medals/gold.jpg")}
            />
            <View>
              <Text className="text-center font-bold">Qualification: </Text>
              <Text>Electrical Enginnering N6 </Text>
              <Text className="text-center mt-2 font-bold">Institution: </Text>
              <Text>Tswane South College </Text>
            </View>
          </View>
        </View>
        <View className=" my-2">
          <View className="flex flex-row w-[90vw] justify-around bg-slate-300 rounded-lg p-2 h-[15vh] ">
            <Image
              className="m-2 rounded-full h-[20vw] w-[20vw]"
              source={require("../assets/medals/silver.jpg")}
            />
            <View>
              <Text className="text-center font-bold">Qualification: </Text>
              <Text>Mechanical Enginnering N3 </Text>
              <Text className="text-center mt-2 font-bold">Institution: </Text>
              <Text>Tswane South College </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ArtisanProfile;
