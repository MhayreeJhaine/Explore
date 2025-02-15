import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import { StyleSheet, View } from "react-native";
import { ThemeProvider, useTheme } from "@/themeContext";
import { LanguageProvider } from "@/constants/utils/languageContext";
import { StatusBar } from "expo-status-bar";
import { QueryClient, QueryClientProvider } from "react-query";
import { I18nextProvider } from "react-i18next";
import i18n from "@/constants/utils/i18n";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  initialRouteName: "(main)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
    Montserrat: require("@/assets/fonts/Poppins-Regular.ttf"),
    Poppins: require("@/assets/fonts/Poppins-Regular.ttf"),
    Axiforma: require("@/assets/fonts/Axiforma-Regular.ttf"),
    AxiformaBold: require("@/assets/fonts/Axiforma-Bold.ttf"),
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider>
      <LanguageProvider>
        <I18nextProvider i18n={i18n}>
          <RootLayoutNav />
        </I18nextProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}

function RootLayoutNav() {
  const { colors } = useTheme();
  const queryClient = new QueryClient();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <StatusBar style={colors.background === "#ffffff" ? "dark" : "light"} />
      <QueryClientProvider client={queryClient}>
        <Stack>
          <Stack.Screen name="(main)" options={{ headerShown: false }} />
          {/* <Stack.Screen name="(tabs)" options={{ headerShown: false }} /> */}
          {/* <Stack.Screen name="modal" options={{ presentation: "modal" }} /> */}
        </Stack>
      </QueryClientProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
