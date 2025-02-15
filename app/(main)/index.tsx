import { View, SafeAreaView } from "react-native";
import React, { useState } from "react";
import globalStyle from "@/globalStyle/globalStyle";
import Top from "@/components/molecules/homepage/top";
import Bottom from "@/components/molecules/homepage/bottom";

const Index = () => {
  const styles = globalStyle();
  const [search, setSearch] = useState("");

  const [filters, setFilters] = useState<{
    continents: string[];
    timeZones: string[];
  }>({
    continents: [],
    timeZones: [],
  });

  // Function to normalize UTC time zones (Ensures consistent format)
  const normalizeTimeZone = (timeZone: string) => {
    return timeZone.replace(/UTC([+-])(\d):/, "UTC$10$2:");
  };

  const handleApplyFilters = (newFilters: {
    continents: string[];
    timeZones: string[];
  }) => {
    const normalizedFilters = {
      continents: newFilters.continents,
      timeZones: newFilters.timeZones.map(normalizeTimeZone), // Normalize before setting
    };

    setFilters(normalizedFilters);
  };

  return (
    <SafeAreaView style={styles.pgContainer}>
      <View>
        <Top
          search={search}
          setSearch={setSearch}
          filters={filters} // ✅ Ensure filters are passed
          onApplyFilters={handleApplyFilters}
        />
        <Bottom search={search} filters={filters} />
      </View>
    </SafeAreaView>
  );
};

export default Index;
