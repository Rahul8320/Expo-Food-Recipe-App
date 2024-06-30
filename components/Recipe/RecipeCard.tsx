import { Recipe } from "@/types/Recipe";
import { Image, StyleSheet } from "react-native";
import { ThemedView } from "../ThemedView";
import { ThemedText } from "../ThemedText";
import { Colors } from "@/constants/Colors";

const RecipeCard = ({ name, thumbnail }: Recipe) => {
  return (
    <ThemedView style={styles.container}>
      <Image source={{ uri: thumbnail }} style={styles.image} />
      <ThemedText type="subtitle" style={styles.titleText}>
        {name}
      </ThemedText>
    </ThemedView>
  );
};

export default RecipeCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    margin: 13,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 8,
    paddingVertical: 12,

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 7,
    elevation: 5,
  },
  titleText: {
    color: Colors.secondary,
    marginVertical: 8,
  },
  image: {
    width: "95%",
    height: 160,
    resizeMode: "cover",
    borderRadius: 12,
    marginVertical: 5,
  },
});
