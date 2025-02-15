import { useTheme } from "@/themeContext";
import { Dimensions } from "react-native";
import { ScaledSheet } from "react-native-size-matters";

const { width, height } = Dimensions.get("window");

const globalStyle = () => {
  const { colors } = useTheme();

  return ScaledSheet.create({
    pgContainer: {
      flex: 1,
      backgroundColor: colors.background,
      paddingHorizontal: "17@s",
      paddingVertical: "45@s",
    },

    tC: {
      gap: "22@s",
    },

    sBtw: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },

    tCI: {
      width: width * 0.3,
      height: height * 0.036,
    },

    sC: {
      flexDirection: "row",
      paddingLeft: "10@s",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: colors.searchBg,
      padding: "5@s",
      borderRadius: "5@s",
    },

    sI: {
      color: colors.searchTxt,
      fontSize: "20@s",
    },

    sCI: {
      left: "-15@s",
      textAlign: "center",
      color: colors.text,
      fontSize: "15@s",
      fontFamily: "Axiforma",
    },

    tCB: {
      top: "-10@s",
      flexDirection: "row",
      alignItems: "center",
      gap: "7@s",
      paddingVertical: "8@s",
      paddingHorizontal: "11@s",
      borderColor: "#A9B8D4",
      borderWidth: 1,
      borderRadius: "3@s",
    },

    tT: {
      color: colors.text,
      fontFamily: "Axiforma",
      fontSize: "13@s",
    },

    bC: {
      marginTop: "15@s",
    },

    sHead: {
      gap: "12@s",
    },

    sH: {
      color: colors.subtext,
      fontSize: "16@s",
      paddingVertical: "7@s",
      fontFamily: "AxiformaBold",
    },

    sL: {
      paddingBottom: "280@s",
    },

    cI: {
      flexDirection: "row",
      alignItems: "center",
      paddingVertical: "8@s",
      gap: "13@s",
    },

    cFC: {
      width: width * 0.15,
      height: height * 0.055,
      justifyContent: "center",
      alignItems: "center",
      borderColor: "#A9B8D4",
      borderWidth: 1,
      borderRadius: "5@s",
    },

    cF: {
      width: "100%",
      height: "99.5%",
      borderRadius: "4@s",
    },

    cN: {
      color: colors.text,
      fontSize: "16@s",

      fontFamily: "AxiformaBold",
    },

    cC: {
      color: colors.subtext,
      fontSize: "14@s",
      fontFamily: "Axiforma",
    },

    cE: {
      color: "red",
      textAlign: "center",
      marginTop: 20,
    },

    cIR: {
      flexDirection: "row",
      gap: "6@s",
      paddingVertical: "2@s",
    },

    cIL: {
      fontSize: "15@s",
      fontFamily: "AxiformaBold",
      color: colors.text,
    },

    cIV: {
      fontSize: "15@s",
      fontFamily: "Axiforma",
      color: colors.subtext,
    },

    container: {
      // flex: 1,
    },

    cIFC: {},

    cIF: {
      width: "100%",
      height: "200@s",
      borderRadius: 10,
      borderColor: "#A9B8D4",
      borderWidth: "0.5@s",
      marginBottom: 20,
    },

    cIT: {
      fontFamily: "AxiformaBold",
      fontSize: "22@s",
      color: colors.text,
      textAlign: "center",
      marginBottom: 10,
    },

    details: {
      marginTop: "30@s",
      gap: "20@s",
    },

    disabledIcon: {},

    flagContainer: {
      position: "relative",
      alignItems: "center",
      justifyContent: "center",
    },

    chevron: {
      height: height * 0.04,
      width: width * 0.085,
      position: "absolute",
      top: "40%",
      transform: [{ translateY: -8 }],
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 20,
    },

    leftChevron: {
      left: 10,
      zIndex: 10,
    },

    chevronIcon: {
      fontSize: "18@s",
      color: "#FFF",
    },

    rightChevron: {
      right: 10,
    },

    mC: {
      flex: 1,
      justifyContent: "flex-end",
      backgroundColor: "rgba(0,0,0,0.5)",
    },

    mIC: {
      backgroundColor: colors.background,
      padding: "18@s",
      borderTopLeftRadius: "25@s",
      borderTopRightRadius: "25@s",
    },

    mH: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "15@s",
    },

    mHT: {
      color: colors.text,
      fontSize: "18@s",
      fontFamily: "AxiformaBold",
    },

    mHI: {
      width: 24,
      height: 24,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#98A2B3",
      borderRadius: 7,
    },

    mHIT: {
      color: colors.cancelX,
      marginTop: -5,
      fontSize: "18@s",
      fontFamily: "AxiformaBold",
    },

    mL: {
      color: colors.text,
    },

    mR: {
      color: colors.text,
      fontSize: "20@s",
    },

    fM: {
      backgroundColor: colors.background,
      padding: "20@s",
      borderTopLeftRadius: 18,
      borderTopRightRadius: 18,
    },

    fMTC: {
      flexDirection: "row",
      color: colors.text,
      justifyContent: "space-between",
      alignItems: "center",
    },

    fMT: {
      fontSize: "16@s",

      fontFamily: "AxiformaBold",

      paddingVertical: "8@s",
      color: colors.text,
    },

    fTxt: {
      color: colors.subtext,
      fontSize: "14@s",
      fontFamily: "Axiforma",
    },

    btn: {
      paddingVertical: "13@s",
      paddingHorizontal: "28@s",
      padding: 10,
      borderWidth: 1,
      borderRadius: 5,
      borderColor: colors.text,
    },

    Btn: {
      paddingVertical: "13@s",
      paddingHorizontal: "28@s",
      backgroundColor: colors.primary,
      borderRadius: 5,
      borderWidth: 1,
      borderColor: colors.primary,
    },

    BtnTxt: {
      color: "#fff",
      fontSize: "14@s",
      fontFamily: "Axiforma",
    },

    cBTN: {
      color: "#98A2B3",
      fontSize: "16@s",
    },
  });
};

export default globalStyle;
