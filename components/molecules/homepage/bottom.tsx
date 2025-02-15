import {
  View,
  Text,
  ActivityIndicator,
  Image,
  SectionList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import globalStyle from "@/globalStyle/globalStyle";
import { useQuery } from "react-query";
import fetchCountries from "@/constants/utils/fetchData";
import { useRouter } from "expo-router";

interface Country {
  name: { common: string };
  capital?: string[];
  flags: { png: string };
  cca2: string;
  cca3: string;
  population: number;
  area: number;
  continents: string[];
  timezones: string[];
  languages?: { [key: string]: string };
  currencies?: { [key: string]: { name: string; symbol: string } };
  countryCode?: string;
  car?: { side: string };
}

interface CountriesProps {
  search: string;
  filters: { continents: string[]; timeZones: string[] };
}

const Countries = ({ search, filters }: CountriesProps) => {
  const styles = globalStyle();
  const router = useRouter();

  const {
    data: countries,
    isLoading,
    isError,
  } = useQuery<Country[]>(["countries"], fetchCountries);

  const filteredCountries = countries
    ?.filter((country) => {
      const matchesSearch = country.name.common
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesContinent =
        filters.continents.length === 0 ||
        filters.continents.some((continent) =>
          country.continents.includes(continent)
        );

      const matchesTimeZone =
        filters.timeZones.length === 0 ||
        filters.timeZones.some((timeZone) =>
          country.timezones.includes(timeZone)
        );

      return matchesSearch && matchesContinent && matchesTimeZone;
    })
    .sort((a, b) => a.name.common.localeCompare(b.name.common)); // Ensure alphabetical order

  const groupedCountries = filteredCountries?.reduce<
    { title: string; data: Country[] }[]
  >((acc, country) => {
    const firstLetter = country.name.common[0].toUpperCase();
    const section = acc.find((sec) => sec.title === firstLetter);

    if (section) {
      section.data.push(country);
    } else {
      acc.push({ title: firstLetter, data: [country] });
    }

    return acc;
  }, []);

  if (isLoading) return <ActivityIndicator size={"large"} />;
  if (isError) return <Text style={styles.cE}>Failed to load data.</Text>;

  return (
    <View style={styles.bC}>
      <SectionList
        sections={groupedCountries || []}
        keyExtractor={(item) => item.cca2}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.sH}>{title}</Text>
        )}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              router.push({
                pathname: "/(main)/countryInfo",
                params: {
                  name: item.name.common,
                  flag: item.flags.png,
                  continent: item.continents || "Unknown Continent",
                  population: item.population?.toString() || "N/A",
                  area: item.area?.toString() || "N/A",
                  timezone: item.timezones?.join(", ") || "N/A",
                  capital: item.capital?.[0] || "No Capital",
                  car: item.car?.side || "Unknown",
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
              })
            }
          >
            <View style={styles.cI}>
              <View style={styles.cFC}>
                <Image source={{ uri: item.flags.png }} style={styles.cF} />
              </View>
              <View>
                <Text style={styles.cN}>{item.name.common}</Text>
                <Text style={styles.cC}>
                  {item.capital?.[0] || "No Capital"}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.sL}
      />
    </View>
  );
};

export default Countries;
