import { View, Text } from "react-native";
import globalStyle from "@/globalStyle/globalStyle";

interface InfoRowProps {
  label: string;
  value: string | number;
  unit?: string;
}

const InfoRow = ({ label, value, unit }: InfoRowProps) => {
  const styles = globalStyle();
  return (
    <View style={styles.cIR}>
      <Text style={styles.cIL}>{label}:</Text>
      <Text style={styles.cIV}>
        {value} {unit}
      </Text>
    </View>
  );
};

export default InfoRow;
