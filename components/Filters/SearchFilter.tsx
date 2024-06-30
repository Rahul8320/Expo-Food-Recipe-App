import { StyleSheet, TextInput } from "react-native";
import { ThemedView } from "../ThemedView";
import { FontAwesome } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";

type SearchFilterProps = {
  icon: keyof typeof FontAwesome.glyphMap;
  placeholder: string;
};

const SearchFilter = ({ icon, placeholder }: SearchFilterProps) => {
  return (
    <ThemedView style={styles.searchContainer}>
      <FontAwesome name={icon} color={Colors.primary} size={24} />
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        placeholderTextColor={Colors.secondary}
      />
    </ThemedView>
  );
};

export default SearchFilter;

const styles = StyleSheet.create({
  searchContainer: {
    backgroundColor: Colors.background,
    flexDirection: "row",
    borderRadius: 8,
    padding: 16,
    marginVertical: 16,

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 7,
    elevation: 5,
  },
  textInput: {
    color: Colors.secondary,
    paddingLeft: 8,
    fontSize: 16,
  },
});
