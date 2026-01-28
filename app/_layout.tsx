import { Stack } from "expo-router";
import {useFonts, Kanit_400Regular, Kanit_700Bold, Kanit_500Medium, Kanit_600SemiBold} from "@expo-google-fonts/kanit";
import * as SplashScreen from 'expo-splash-screen';
import { use, useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Kanit_400Regular,
    Kanit_700Bold,
    Kanit_500Medium,
    Kanit_600SemiBold,
  });

  useEffect(() => {
    if (!fontsLoaded) { SplashScreen.hideAsync(); }
  }, [fontsLoaded]);

    if (!fontsLoaded) {
      return null;
    }

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="input" options={{ headerShown: false }} />
      <Stack.Screen name="result" options={{ headerShown: false }} />
    </Stack>
  );
}
