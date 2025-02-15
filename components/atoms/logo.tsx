import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { useTheme } from "@/themeContext";
import globalStyle from "@/globalStyle/globalStyle";
import Feather from "@expo/vector-icons/Feather";

const Logo = () => {
  const { theme, toggleTheme } = useTheme();
  const styles = globalStyle();
  //   console.log(theme);

  return (
    <View style={styles.sBtw}>
      <Image
        source={
          theme === "light"
            ? require("@/assets/images/lightLogo.jpg")
            : require("@/assets/images/darkLogo.jpg")
        }
        style={styles.tCI}
      />
      <Pressable onPress={toggleTheme}>
        <Feather
          name={theme === "light" ? "sun" : "moon"}
          size={24}
          color={theme === "light" ? "black" : "white"}
        />
      </Pressable>
    </View>
  );
};

export default Logo;
