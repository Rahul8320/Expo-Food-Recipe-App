import { StyleSheet } from "react-native";
import { ThemedView } from "./ThemedView";
import { ThemedText } from "./ThemedText";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Colors } from "@/constants/Colors";

type HeaderProps = {
  headerText: string;
  headerIcon: keyof typeof FontAwesome.glyphMap;
};

const Header = ({ headerText, headerIcon }: HeaderProps) => {
  return (
    <ThemedView style={styles.headerContainer}>
      <ThemedText type="title">{headerText}</ThemedText>
      <FontAwesome name={headerIcon} size={24} color={Colors.primary} />
    </ThemedView>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
  },
});
