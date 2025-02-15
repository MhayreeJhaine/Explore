import React, { useEffect, useState } from "react";
import { Modal, View, Text, FlatList, Pressable } from "react-native";
import { useLanguage } from "@/constants/utils/languageContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import globalStyle from "@/globalStyle/globalStyle";
import { Ionicons } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "ID", name: "Bahasa" },
  { code: "DE", name: "Deutsch" },
  { code: "EN", name: "English" },
  { code: "ES", name: "Español" },
  { code: "FR", name: "Française" },
  { code: "IT", name: "Italiano" },
  { code: "PT", name: "Português" },
  { code: "RU", name: "Русский" },
  { code: "SV", name: "Svenska" },
  { code: "TR", name: "Türkçe" },
  { code: "ZH", name: "普通话" },
  { code: "AR", name: "العربية" },
  { code: "BN", name: "বাংলা" },
];

type Props = {
  visible: boolean;
  onClose: () => void;
};

export default function LanguageModal({ visible, onClose }: Props) {
  const styles = globalStyle();
  const { language, setLanguage } = useLanguage();
  const [selected, setSelected] = useState(language.code);
  const { i18n } = useTranslation(); // <-- Import useTranslation to change language

  useEffect(() => {
    setSelected(language.code);
  }, [visible]);

  const handleLanguageChange = async (lang: { code: string; name: string }) => {
    setSelected(lang.code);
    setLanguage(lang);
    await AsyncStorage.setItem("selectedLanguage", JSON.stringify(lang));

    i18n.changeLanguage(lang.code);

    onClose();
  };

  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.mC}>
        <View style={styles.mIC}>
          <View style={styles.mH}>
            <Text style={styles.mHT}>Languages</Text>
            <Pressable onPress={onClose} style={styles.mHI}>
              <Text style={styles.mHIT}>x</Text>
            </Pressable>
          </View>

          <FlatList
            data={languages}
            keyExtractor={(item) => item.code}
            renderItem={({ item }) => (
              <Pressable
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  padding: 10,
                  borderRadius: 5,
                }}
                onPress={() => handleLanguageChange(item)}
              >
                <Text style={styles.mL}>{item.name}</Text>
                <Ionicons
                  name={
                    selected === item.code
                      ? "radio-button-on"
                      : "radio-button-off"
                  }
                  style={styles.mR}
                />
              </Pressable>
            )}
          />
        </View>
      </View>
    </Modal>
  );
}
