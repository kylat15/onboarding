import * as React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoadingSplash from './screens/LoadingSplash';
import Onboarding0 from './screens/Onboarding0';
import Onboarding1 from './screens/Onboarding1';
import Onboarding2 from './screens/Onboarding2';
import { useFonts } from "expo-font";

const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded, error] = useFonts({
    "ArchivoBlack-Regular": require("./assets/fonts/ArchivoBlack-Regular.ttf"),
    "OrelegaOne-Regular": require("./assets/fonts/OrelegaOne-Regular.ttf"),
    "DidactGothic-Regular": require("./assets/fonts/DidactGothic-Regular.ttf"),
    "Basic-Regular": require("./assets/fonts/Basic-Regular.ttf"),
    "HiraKakuStdN-W8": require("./assets/fonts/HiraKakuStdN-W8.otf"),
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
    "HiraKakuProN-W3": require("./assets/fonts/HiraKakuProN-W3.otf"),
    "HiraKakuPro-W3": require("./assets/fonts/HiraKakuPro-W3.otf"),
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoadingSplash">
        <Stack.Screen name="LoadingSplash" component={LoadingSplash} options={{ headerShown: false }} />
        <Stack.Screen name="Onboarding0" component={Onboarding0} options={{ headerShown: false }} />
        <Stack.Screen name="Onboarding1" component={Onboarding1} options={{ headerShown: false }} />
        <Stack.Screen name="Onboarding2" component={Onboarding2} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}