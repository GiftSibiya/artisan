import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import HomeScreen from "./screens/HomeScreen";
import WorkOrderScreen from "./screens/WorkOrder";
import ChatScreen from "./screens/Chats";
import ProfileScreen from "./screens/Profile";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

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
    <Stack.Screen name="WorkOrderStackWorkOrder" component={WorkOrderScreen} />
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

export default function Navigation() {
  return (
    <NavigationContainer independent={true}>
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

            // You can return any component here to render custom icons
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Work Order" component={WorkOrderStack} />
        <Tab.Screen name="Chat" component={ChatStack} />
        <Tab.Screen name="Profile" component={ProfileStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
