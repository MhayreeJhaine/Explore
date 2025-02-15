import React, { createContext, useState, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import i18n from "@/constants/utils/i18n";
import * as Localization from "expo-localization";

type Language = {
  code: string;
  name: string;
};

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const defaultLanguage: Language = {
    code: Localization.locale.split("-")[0] || "en", // Detect device language
    name: "English",
  };

  const [language, setLanguageState] = useState<Language>(defaultLanguage);

  useEffect(() => {
    const loadLanguage = async () => {
      const savedLanguage = await AsyncStorage.getItem("selectedLanguage");
      if (savedLanguage) {
        const parsedLang: Language = JSON.parse(savedLanguage);
        setLanguageState(parsedLang);
        i18n.changeLanguage(parsedLang.code.toLowerCase());
      } else {
        i18n.changeLanguage(defaultLanguage.code.toLowerCase());
      }
    };

    loadLanguage();
  }, []);

  const setLanguage = async (lang: Language) => {
    setLanguageState(lang);
    await AsyncStorage.setItem("selectedLanguage", JSON.stringify(lang));
    i18n.changeLanguage(lang.code.toLowerCase());
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context)
    throw new Error("useLanguage must be used within a LanguageProvider");
  return context;
};
