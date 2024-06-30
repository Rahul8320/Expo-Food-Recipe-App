import { FlatList, StyleSheet } from "react-native";
import { ThemedView } from "../ThemedView";
import { Recipes } from "@/constants/Recipes";
import RecipeCard from "./RecipeCard";

const RecipeList = () => {
  return (
    <ThemedView style={styles.container}>
      <FlatList
        data={Recipes}
        renderItem={({ item }) => <RecipeCard {...item} />}
        keyExtractor={(item) => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
      />
    </ThemedView>
  );
};

export default RecipeList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    marginBottom: 20,
    marginHorizontal: -14,
  },
});
