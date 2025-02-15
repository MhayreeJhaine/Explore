import React, { useState } from "react";
import { View, Text, Modal, Pressable, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import globalStyle from "@/globalStyle/globalStyle";

const continents = [
  "Africa",
  "Antarctica",
  "Asia",
  "Australia",
  "Europe",
  "North America",
  "South America",
];
const timeZones = ["UTC+1:00", "UTC+2:00", "UTC+3:00", "UTC+4:00", "UTC+5:00"];

export default function FilterModal({
  visible,
  onClose,
  onApplyFilters,
  filters,
}: {
  visible: boolean;
  onClose: () => void;
  onApplyFilters: (filters: {
    continents: string[];
    timeZones: string[];
  }) => void;
  filters: { continents: string[]; timeZones: string[] };
}) {
  const styles = globalStyle();
  const [selectedContinents, setSelectedContinents] = useState(
    filters.continents
  );
  const [selectedTimeZones, setSelectedTimeZones] = useState(filters.timeZones);
  const [showContinents, setShowContinents] = useState(false);
  const [showTimeZones, setShowTimeZones] = useState(false);

  // Toggle continent selection
  const toggleContinentSelection = (continent: string) => {
    setSelectedContinents((prev) =>
      prev.includes(continent)
        ? prev.filter((item) => item !== continent)
        : [...prev, continent]
    );
  };

  // Toggle time zone selection
  const toggleTimeZoneSelection = (zone: string) => {
    setSelectedTimeZones((prev) =>
      prev.includes(zone)
        ? prev.filter((item) => item !== zone)
        : [...prev, zone]
    );
  };

  // Reset selections but keep dropdowns open
  const resetFilters = () => {
    setSelectedContinents([]);
    setSelectedTimeZones([]);
  };

  // Apply selected filters
  const handleShowResults = () => {
    onApplyFilters({
      continents: selectedContinents,
      timeZones: selectedTimeZones,
    });
    onClose();
  };

  return (
    <Modal transparent visible={visible} animationType="slide">
      <View style={styles.mC}>
        <View style={styles.fM}>
          <View style={styles.mH}>
            <Text style={styles.mHT}>Filter</Text>
            <Pressable onPress={onClose} style={styles.mHI}>
              <Text style={styles.mHIT}>x</Text>
            </Pressable>
          </View>

          {/* Continent Dropdown */}
          <Pressable
            style={styles.fMTC}
            onPress={() => setShowContinents(!showContinents)}
          >
            <Text style={styles.fMT}>Continent</Text>
            <Ionicons
              style={styles.fMT}
              name={showContinents ? "chevron-up" : "chevron-down"}
            />
          </Pressable>

          {showContinents && (
            <FlatList
              data={continents}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <Pressable
                  onPress={() => toggleContinentSelection(item)}
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingVertical: 8,
                  }}
                >
                  <Text style={styles.fTxt}>{item}</Text>
                  <Ionicons
                    name={
                      selectedContinents.includes(item)
                        ? "checkbox"
                        : "square-outline"
                    }
                    style={styles.sI}
                  />
                </Pressable>
              )}
            />
          )}

          {/* Time Zone Dropdown */}
          <Pressable
            style={styles.fMTC}
            onPress={() => setShowTimeZones(!showTimeZones)}
          >
            <Text style={styles.fMT}>Time Zone</Text>
            <Ionicons
              style={styles.fMT}
              name={showTimeZones ? "chevron-up" : "chevron-down"}
            />
          </Pressable>

          {showTimeZones && (
            <FlatList
              data={timeZones}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <Pressable
                  onPress={() => toggleTimeZoneSelection(item)}
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingVertical: 8,
                  }}
                >
                  <Text style={styles.fTxt}>{item}</Text>
                  <Ionicons
                    name={
                      selectedTimeZones.includes(item)
                        ? "checkbox"
                        : "square-outline"
                    }
                    style={styles.sI}
                  />
                </Pressable>
              )}
            />
          )}

          {/* Buttons */}
          {(showContinents || showTimeZones) && (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 20,
              }}
            >
              <Pressable onPress={resetFilters} style={styles.btn}>
                <Text style={styles.fTxt}>Reset</Text>
              </Pressable>

              <Pressable onPress={handleShowResults} style={styles.Btn}>
                <Text style={styles.BtnTxt}>Show results</Text>
              </Pressable>
            </View>
          )}
        </View>
      </View>
    </Modal>
  );
}
