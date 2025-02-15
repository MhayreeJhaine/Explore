import { View, Image, Pressable } from "react-native";
import React from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import Feather from "@expo/vector-icons/Feather";
import globalStyle from "@/globalStyle/globalStyle";
import { useQuery } from "react-query";
import fetchCountries from "@/constants/utils/fetchData";

interface Country {
  name: { common: string };
  flags: { png: string };
  region?: string;
  population?: number;
  capital?: string[];
  area: number;
  timezones: string[];
  continents: string[];
  currencies?: { [key: string]: { name: string; symbol?: string } };
  languages?: { [key: string]: string };
  cca3?: string;
}

const FlagCarousel = () => {
  const styles = globalStyle();
  const router = useRouter();
  const params = useLocalSearchParams();

  // Fetch and sort countries alphabetically
  const { data: countries = [] } = useQuery<Country[]>(
    "countries",
    fetchCountries,
    {
      select: (data) =>
        data.sort((a, b) => a.name.common.localeCompare(b.name.common)),
    }
  );

  // Find the current country's index
  const currentIndex = countries.findIndex(
    (c) => c.name?.common === params.name
  );

  // Determine previous and next countries
  const prevCountry = currentIndex > 0 ? countries[currentIndex - 1] : null;
  const nextCountry =
    currentIndex < countries.length - 1 ? countries[currentIndex + 1] : null;

  const navigateToCountry = (item: Country) => {
    router.replace({
      pathname: "/(main)/countryInfo",
      params: {
        name: item.name.common,
        flag: item.flags.png,
        region: item.region || "Unknown Region",
        continent: item.continents || "Unknown Continent",
        population: item.population?.toString() || "N/A",
        capital: item.capital?.[0] || "No Capital",
        area: item.area?.toString() || "N/A",
        timezone: item.timezones?.join(", ") || "N/A",
        currency: item.currencies
          ? `${Object.values(item.currencies)[0]?.name} (${
              Object.values(item.currencies)[0]?.symbol || "N/A"
            })`
          : "N/A",
        languages: item.languages
          ? Object.values(item.languages).join(", ")
          : "N/A",
        countryCode: item.cca3 || "N/A",
      },
    });
  };

  return (
    <View style={styles.sHead}>
      <View style={styles.flagContainer}>
        {prevCountry && (
          <Pressable
            onPress={() => navigateToCountry(prevCountry)}
            style={[styles.chevron, styles.leftChevron]}
          >
            <Feather name="chevron-left" style={styles.chevronIcon} />
          </Pressable>
        )}

        <Image source={{ uri: params.flag as string }} style={styles.cIF} />

        {nextCountry && (
          <Pressable
            onPress={() => navigateToCountry(nextCountry)}
            style={[styles.chevron, styles.rightChevron]}
          >
            <Feather name="chevron-right" style={styles.chevronIcon} />
          </Pressable>
        )}
      </View>
    </View>
  );
};

export default FlagCarousel;
