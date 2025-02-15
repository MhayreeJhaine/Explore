import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import AsyncStorage from "@react-native-async-storage/async-storage";

const resources = {
  en: { translation: { welcome: "Welcome", searchCountry: "Search Country" } },
  es: { translation: { welcome: "Bienvenido", searchCountry: "Buscar país" } },
  fr: {
    translation: { welcome: "Bienvenue", searchCountry: "Rechercher un pays" },
  },
  de: { translation: { welcome: "Willkommen", searchCountry: "Land suchen" } },
  // Add more languages as needed
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
