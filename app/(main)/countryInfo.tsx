import { View, Text, ScrollView, SafeAreaView, Pressable } from "react-native";
import React from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import globalStyle from "@/globalStyle/globalStyle";
import Feather from "@expo/vector-icons/Feather";
import InfoRow from "@/components/atoms/info";
import FlagCarousel from "@/components/atoms/flagCarousel";
import { useTranslation } from "react-i18next";

const CountryInfo = () => {
  const styles = globalStyle();
  const params = useLocalSearchParams();
  const router = useRouter();

  const { t } = useTranslation();

  return (
    <SafeAreaView style={styles.pgContainer}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.sHead}>
          <View style={styles.sBtw}>
            <Pressable onPress={() => router.back()}>
              <Feather name="arrow-left" style={styles.sI} />
            </Pressable>
            <Text style={styles.cIT}>{params.name}</Text>
            <Text>{""}</Text>
          </View>
        </View>

        <FlagCarousel />

        <View style={styles.details}>
          <InfoRow label="Population" value={params.population as string} />

          <InfoRow label="Continent" value={params.continent as string} />

          <InfoRow label="Capital City" value={params.capital as string} />

          <InfoRow label="Currency" value={params.currency as string} />

          <InfoRow
            label="Official Language(s)"
            value={params.languages as string}
          />

          <InfoRow label="Timezone" value={params.timezone as string} />

          <InfoRow label="Area" value={params.area as string} unit="km²" />

          <InfoRow label="Country Code" value={params.countryCode as string} />

          {params.car ? (
            <InfoRow label="Driving Side" value={params.car as string} />
          ) : null}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CountryInfo;
