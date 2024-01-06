import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./navigation";
import LoginScreen from "./screens/LoginScreen";

export default function App() {
  const [authenticated, setAuthenticated] = useState(false);

  const handleSignIn = () => {
    // Simulate successful authentication after a button press
    setAuthenticated(true);
  };

  return (
    <NavigationContainer>
      <View style={styles.container}>
        {authenticated ? (
          <Navigation />
        ) : (
          <LoginScreen onSignIn={handleSignIn} />
        )}
        <StatusBar style="auto" />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
