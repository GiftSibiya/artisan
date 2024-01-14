import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import WorkOrderScreen from "./screens/WorkOrder";
import ChatScreen from "./screens/Chats";
import ProfileScreen from "./screens/Profile";
import ArtisanProfileScreen from "./screens/ArtisanProfile";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  const [authenticated, setAuthenticated] = useState(false);

  const handleSignIn = () => {
    // Simulate successful authentication after a button press
    setAuthenticated(true);
  };

  const HomeStack = () => (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="HomeStackHome" component={HomeScreen} />
    </Stack.Navigator>
  );

  const WorkOrderStack = () => (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="WorkOrderStackWorkOrder"
        component={WorkOrderScreen}
      />
      <Stack.Screen name="ArtisanProfile" component={ArtisanProfileScreen} />
    </Stack.Navigator>
  );

  const ChatStack = () => (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="ChatStackChat" component={ChatScreen} />
    </Stack.Navigator>
  );

  const ProfileStack = () => (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="ProfileStackProfile" component={ProfileScreen} />
    </Stack.Navigator>
  );

  return (
    <NavigationContainer>
      {authenticated ? (
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Home") {
                iconName = focused ? "home" : "home-outline";
              } else if (route.name === "Work Order") {
                iconName = focused ? "hammer" : "hammer-outline";
              } else if (route.name === "Chat") {
                iconName = focused ? "chatbubble" : "chatbubble-outline";
              } else if (route.name === "Profile") {
                iconName = focused ? "person" : "person-outline";
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
        >
          <Tab.Screen
            options={{ headerShown: false }}
            name="Home"
            component={HomeStack}
          />
          <Tab.Screen name="Work Order" component={WorkOrderStack} />
          <Tab.Screen name="Chat" component={ChatStack} />
          <Tab.Screen name="Profile" component={ProfileStack} />
        </Tab.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen name="LogIn" options={{ headerShown: false }}>
            {(props) => <LoginScreen {...props} onSignIn={handleSignIn} />}
          </Stack.Screen>
        </Stack.Navigator>
      )}
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
