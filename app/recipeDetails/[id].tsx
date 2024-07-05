import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import { Recipes } from "@/constants/Recipes";
import { Recipe } from "@/types/Recipe";
import { FontAwesome } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const RecipeDetailsScreen = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [recipe, setRecipe] = useState<Recipe | null>(null);

  const { id } = useLocalSearchParams();

  useEffect(() => {
    setLoading(true);

    if (id) {
      const recipe = Recipes.find((item) => item.id === id);
      setRecipe(recipe ?? null);
    }

    setLoading(false);
  }, [id]);

  if (loading === true) {
    return (
      <SafeAreaView style={styles.loading}>
        <ActivityIndicator size={150} color={Colors.primary} />
      </SafeAreaView>
    );
  }

  if (loading === false && recipe === null) {
    return Alert.alert("Recipe Not Found", "Please try again after sometime.");
  }

  return (
    <SafeAreaView style={styles.rootContainer}>
      <ThemedView style={styles.headerContainer}>
        <TouchableOpacity onPress={() => router.back()}>
          <FontAwesome
            name="arrow-circle-left"
            size={28}
            color={Colors.primary}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name="heart-o" size={28} color={Colors.primary} />
        </TouchableOpacity>
      </ThemedView>
      <ThemedView style={styles.container}>
        <ThemedView style={styles.imageContainer}>
          <Image source={{ uri: recipe?.thumbnail }} style={styles.image} />
        </ThemedView>
        <ScrollView style={{ marginTop: 150 }}>
          <ThemedText type="title" style={{ marginVertical: 12 }}>
            {recipe?.name}
          </ThemedText>
          <ThemedText>{recipe?.rating}</ThemedText>
        </ScrollView>
      </ThemedView>
    </SafeAreaView>
  );
};

export default RecipeDetailsScreen;

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  rootContainer: {
    backgroundColor: Colors.tertiary,
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    marginTop: 180,
    borderTopLeftRadius: 56,
    borderTopRightRadius: 56,
    alignItems: "center",
  },
  imageContainer: {
    height: 300,
    width: 300,
    position: "absolute",
    top: -160,
    borderRadius: 150,
    overflow: "hidden",
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 16,
    backgroundColor: Colors.tertiary,
    marginVertical: 12,
  },
});
