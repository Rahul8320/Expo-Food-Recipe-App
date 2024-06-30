import CategoryFilter from "@/components/Filters/CategoryFilter";
import Header from "@/components/Header";
import SearchFilter from "@/components/Filters/SearchFilter";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import RecipeList from "@/components/Recipe/RecipeList";
import { Colors } from "@/constants/Colors";

const RecipesScreen = () => {
  return (
    <SafeAreaView style={styles.rootContainer}>
      <ThemedView style={styles.container}>
        {/* render header */}
        <Header headerIcon={"bell-o"} headerText={"Hi Rahul"} />

        {/* search filter */}
        <SearchFilter icon="search" placeholder="Enter your favorite recipe" />

        {/* category filter  */}
        <ThemedView style={{ marginTop: 10 }}>
          <ThemedText type="subtitle" style={styles.subtitle}>
            Categories
          </ThemedText>
          <CategoryFilter />
        </ThemedView>

        {/* recipe list */}
        <ThemedView style={{ marginTop: 10, flex: 1 }}>
          <ThemedText type="subtitle" style={styles.subtitle}>
            Dessert Recipes
          </ThemedText>
          <RecipeList />
        </ThemedView>
      </ThemedView>
    </SafeAreaView>
  );
};

export default RecipesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  subtitle: {
    fontSize: 22,
    color: Colors.primary,
  },
});
