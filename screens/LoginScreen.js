import {
  View,
  Text,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginScreen() {
  return (
    <SafeAreaView className="flex flex-col gap-2 justify-center bg-[#ffffff] items-center w-screen h-screen ">
      <View className="">
        <Image
          style={{ width: 250, height: 250 }}
          source={require("../assets/logo/FINDER.png")}
        />
      </View>
      <Text className="mb-[4vh] text-lg">
        {" "}
        You Don't Need Talent To Find Talent
      </Text>
      <Text>Log In To Your Account</Text>
      <TextInput
        className="border-[2px] border-black w-[70vw] h-[60px] rounded-2xl p-2"
        placeholder="Email"
      />
      <TextInput
        className="border-[2px] border-black w-[70vw] mb-5 h-[60px] rounded-2xl p-2"
        placeholder="Password"
        secureTextEntry={true}
      />
      <TouchableOpacity
        onPress={null}
        className="bg-blue-950 w-[70vw]  p-3 rounded-md"
      >
        <Text className="text-white text-center"> Sign In </Text>
      </TouchableOpacity>

      <Text>Or Sign in With</Text>
      {/* Icons from Freepic and Pixel Perfect */}
      <View className="felx flex-row items-center mb-[4vh] justify-around w-[70vw] h-[60px]">
        <Image
          style={{ width: 40, height: 40 }}
          source={require("../assets/logo/google.png")}
        ></Image>
        <Image
          style={{ width: 40, height: 40 }}
          source={require("../assets/logo/facebook.png")}
        ></Image>
      </View>
      <Text>
        Dont Have An Account? <Text className="text-blue-700">Sign In</Text>
      </Text>
    </SafeAreaView>
  );
}
