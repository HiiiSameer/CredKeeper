import { StyleSheet } from "react-native";
import { rHs, rVs } from "./RNSizeMatter";
import { color } from "../utils/constants/colors";

export const styles = StyleSheet.create({
  headerView: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    height: rVs(45),
    backgroundColor: color.WHITE,
    paddingVertical: rVs(35),
    borderBottomWidth: 6,
    borderBottomColor: "rgba(0, 0, 0, 0.2)",
  },
  headerImage: { marginTop: 14, width: rHs(87), height: rVs(44) },
});
