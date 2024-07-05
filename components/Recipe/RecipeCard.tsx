import { Recipe } from "@/types/Recipe";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { ThemedText } from "../ThemedText";
import { Colors } from "@/constants/Colors";
import { FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";

const RecipeCard = ({ name, thumbnail, rating, id }: Recipe) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => router.navigate(`recipeDetails/${id}`)}
    >
      <Image source={{ uri: thumbnail }} style={styles.image} />
      <ThemedText type="subtitle" style={styles.titleText}>
        {name}
      </ThemedText>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <ThemedText>35 mins</ThemedText>
        <ThemedText style={{ marginHorizontal: 8 }}>|</ThemedText>
        <ThemedText>{rating}</ThemedText>
        <FontAwesome
          name="star"
          size={16}
          color={Colors.primary}
          style={{ marginLeft: 5 }}
        />
      </View>
    </TouchableOpacity>
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
