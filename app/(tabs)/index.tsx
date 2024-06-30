import { StyleSheet, Image, TouchableOpacity } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { Colors } from "@/constants/Colors";

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ThemedView style={styles.container}>
        <Image
          source={require("../../assets/images/food.png")}
          style={{ aspectRatio: 1, objectFit: "contain" }}
        />
        <ThemedText type="subtitle" style={styles.subtitleText}>
          40K+ Premium Recipes
        </ThemedText>
        <ThemedText type="title" style={styles.titleText}>
          Cook Like A Chef
        </ThemedText>

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => router.navigate("/recipes")}
        >
          <ThemedText type="subtitle" style={{ color: "white" }}>
            Let's Go
          </ThemedText>
        </TouchableOpacity>
      </ThemedView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  subtitleText: {
    color: Colors.primary,
  },
  titleText: {
    color: Colors.secondary,
    marginVertical: 44,
  },
  buttonContainer: {
    backgroundColor: Colors.primary,
    borderRadius: 18,
    paddingVertical: 18,
    width: "80%",
    alignItems: "center",
  },
});
