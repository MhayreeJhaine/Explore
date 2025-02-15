import { Stack } from "expo-router";
import React from "react";

const Layout = () => {
  return (
    <Stack
      initialRouteName="index"
      screenOptions={{ headerShown: false }}
    ></Stack>
  );
};

export default Layout;
