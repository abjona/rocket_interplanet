import React, { useEffect, useState } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { ThemeProvider } from "styled-components";
import { Theme } from "@/configs/theme";

import Router from "@/router";
import * as Font from "expo-font";

export default function App() {
  const [theme, setTheme] = useState(Theme);
  const [fontLoad, setFontLoad] = useState(false);

  useEffect(()=>{
    async function loadFont() {
      // await AsyncStorage.clear();
      await Font.loadAsync({
        "SignikaNegative-Bold": require("./assets/fonts/SignikaNegative-Bold.ttf"),
        "SignikaNegative-Light": require("./assets/fonts/SignikaNegative-Light.ttf"),
        "SignikaNegative-Regular": require("./assets/fonts/SignikaNegative-Regular.ttf"),
        "SignikaNegative-SemiBold": require("./assets/fonts/SignikaNegative-SemiBold.ttf"),

        "JosefinSans-Bold": require("./assets/fonts/JosefinSans-Bold.ttf"),
        "JosefinSans-BoldItalic": require("./assets/fonts/JosefinSans-BoldItalic.ttf"),
        "JosefinSans-Italic": require("./assets/fonts/JosefinSans-Italic.ttf"),
        "JosefinSans-Light": require("./assets/fonts/JosefinSans-Light.ttf"),
        "JosefinSans-LightItalic": require("./assets/fonts/JosefinSans-LightItalic.ttf"),
        "JosefinSans-Regular": require("./assets/fonts/JosefinSans-Regular.ttf"),
        "JosefinSans-SemiBold": require("./assets/fonts/JosefinSans-SemiBold.ttf"),
        "JosefinSans-SemiBoldItalic": require("./assets/fonts/JosefinSans-SemiBoldItalic.ttf"),
        "JosefinSans-Thin": require("./assets/fonts/JosefinSans-Thin.ttf"),
        "JosefinSans-ThinItalic": require("./assets/fonts/JosefinSans-ThinItalic.ttf"),
      });
      setFontLoad(true);
    }

    loadFont();
  })

  return fontLoad ?(
    <ThemeProvider theme={theme}>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar
          barStyle="light-content"
          hidden={false}
          backgroundColor="#212244"
          translucent={false}
        />
        <Router />
      </SafeAreaView>
    </ThemeProvider>
  ): <></>
}

