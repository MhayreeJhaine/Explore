import { View, Text, TextInput, Pressable } from "react-native";
import React, { useState } from "react";
import globalStyle from "@/globalStyle/globalStyle";
import Logo from "../../atoms/logo";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useTheme } from "@/themeContext";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useLanguage } from "@/constants/utils/languageContext";
import LanguageModal from "../langModal";
import FilterModal from "../filterModal";
import { useTranslation } from "react-i18next";

interface TopProps {
  search: string;
  setSearch: (text: string) => void;
  filters: { continents: string[]; timeZones: string[] };
  onApplyFilters: (filters: {
    continents: string[];
    timeZones: string[];
  }) => void;
}

const Top = ({ search, setSearch, filters, onApplyFilters }: TopProps) => {
  const { t } = useTranslation();
  const styles = globalStyle();
  const { theme } = useTheme();
  const { language } = useLanguage();
  const [modalVisible, setModalVisible] = useState(false);
  const [filterVisible, setFilterVisible] = useState(false);

  return (
    <View style={styles.tC}>
      <Logo />

      <View style={styles.sC}>
        <Pressable>
          <Ionicons name="search" style={styles.sI} />
        </Pressable>

        <TextInput
          placeholder="Search Country"
          placeholderTextColor={theme === "dark" ? "#EAECF0" : "#667085"}
          style={styles.sCI}
          value={search}
          onChangeText={setSearch}
        />
        <Text>{""}</Text>
      </View>

      <View style={styles.sBtw}>
        <Pressable onPress={() => setModalVisible(true)} style={styles.tCB}>
          <SimpleLineIcons name="globe" style={styles.sI} />
          <Text style={styles.tT}>{language.code}</Text>
        </Pressable>
        <Pressable onPress={() => setFilterVisible(true)} style={styles.tCB}>
          <AntDesign name="filter" style={styles.sI} />
          <Text style={styles.tT}>{t("Filter")}</Text>
        </Pressable>
      </View>
      <LanguageModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      />

      <FilterModal
        visible={filterVisible}
        onClose={() => setFilterVisible(false)}
        onApplyFilters={onApplyFilters}
        filters={filters}
      />
    </View>
  );
};

export default Top;
