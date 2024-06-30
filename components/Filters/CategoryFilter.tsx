import { ScrollView, StyleSheet, Image } from "react-native";
import { ThemedView } from "../ThemedView";
import { ThemedText } from "../ThemedText";
import { Categories } from "@/constants/Categories";
import { Colors } from "@/constants/Colors";

const CategoryFilter = () => {
  return (
    <ThemedView>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {Categories.map(({ name, id, thumbnail }, index) => (
          <ThemedView
            key={id}
            style={[
              styles.categoryContainer,
              {
                backgroundColor:
                  index === 0 ? Colors.primary : Colors.background,
              },
            ]}
          >
            <Image source={{ uri: thumbnail }} style={styles.imageThumbnail} />
            <ThemedText
              type="defaultSemiBold"
              style={{
                fontSize: 18,
                color: index === 0 ? "white" : "black",
              }}
            >
              {name}
            </ThemedText>
          </ThemedView>
        ))}
      </ScrollView>
    </ThemedView>
  );
};

export default CategoryFilter;

const styles = StyleSheet.create({
  categoryContainer: {
    flex: 1,
    marginRight: 26,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginVertical: 16,
    alignItems: "center",

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 7,
    elevation: 5,
  },
  imageThumbnail: {
    width: "100%",
    height: 46,
    objectFit: "cover",
    borderRadius: 8,
  },
});
