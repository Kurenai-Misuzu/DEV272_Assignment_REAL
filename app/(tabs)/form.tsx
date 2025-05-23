import { StyleSheet } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";
import AddVenue from "@/components/AddForm";

export default function Form() {
  return (
    <SafeAreaView>
      <Stack.Screen options={{ title: "Form" }} />
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Form Page</ThemedText>
      </ThemedView>
      <AddVenue />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    padding: 10,
    paddingTop: 30,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
    padding: 10,
  },
});
