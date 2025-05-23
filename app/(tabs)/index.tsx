import {
  StyleSheet,
  ScrollView,
  FlatList,
  TextInput,
  Button,
  SafeAreaView,
} from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useEffect, useState } from "react";
import FloatingButton from "@/components/FloatingButton";

// my components
import Card from "@/components/Card";
import { useVenueListContext } from "@/context/VenueListContext";
import { useVenueContext, Venue } from "@/context/VenueContext";
import { QueryVenues } from "@/data/queryVenues";
import openCourts from "@/data/openCourts.json";

let filteredJson = "";

export default function HomeScreen() {
  // DECLARATIONS
  const { venueList } = useVenueListContext(); // list of venues
  const { venue } = useVenueContext(); // the one venue chosen after clicking on it
  const [searchQuery, setSearchQuery] = useState(""); // handles search query
  const [filteredData, setFilteredData] = useState(venueList); // handles filtering the data
  const jsonData = openCourts["Open Courts"];

  // Changes the data when the Search button is pressed
  const handleSearch = () => {
    const filtered = venueList.filter((item) =>
      item.Name.toLowerCase().includes(searchQuery.toLowerCase()),
    );
    setFilteredData(filtered);
    filteredJson = JSON.stringify(
      jsonData.filter((item) =>
        item.Name.toLowerCase().includes(searchQuery.toLocaleLowerCase()),
      ),
    );
    console.log("button pressed: ", searchQuery);
    console.log("Filtered data: ", filteredJson);
  };

  // Changes the searchQuery when the text box is changed
  const changeSearch = (query: string) => {
    setSearchQuery(query);
  };

  // this is extremely dirty plese let me know if there is a better way to do this
  const setVenueAndRender = (item: Venue) => {
    venue.ID = item.ID;
    venue.Name = item.Name;
    venue.Location = item.Location;
    venue.Courts = item.Courts;
    venue.Price = item.Price;
    venue.Description = item.Description;
    return <Card />;
  };

  // does a querty for the list of venues from supabase
  let listStatus = QueryVenues();

  // updates venue list on change
  useEffect(() => {
    if (searchQuery === "") {
      setFilteredData(venueList);
    } else {
      const filtered = venueList.filter((item) =>
        item.Name.toLowerCase().includes(searchQuery.toLowerCase()),
      );
      setFilteredData(filtered);
    }
  }, [venueList, searchQuery]);

  return (
    <SafeAreaView>
      {/**THIS CAUSES THE TEST TO NOT RUN I FIGURED IT OUT YAHOOO*/}
      {/* <Stack.Screen options={{ title: 'Home'}} /> */}

      {/* Scrollview */}

      <ScrollView style={styles.scrollStyle}>
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title">Pickup Court Finder</ThemedText>
        </ThemedView>
        <ThemedView style={styles.stepContainer}>
          <ThemedText type="subtitle">
            Open Volleyball courts near you!
          </ThemedText>
        </ThemedView>

        {/* Text Input */}

        <TextInput
          style={styles.textInputStyle}
          placeholder={"Search"}
          value={searchQuery}
          onChangeText={changeSearch}
        />

        {/* Button */}

        <Button title="Search" onPress={handleSearch} />
      </ScrollView>

      {/* FlatList */}
      <FlatList
        style={styles.flatlistStyle}
        data={filteredData}
        renderItem={({ item }) => setVenueAndRender(item)}
        ListEmptyComponent={
          <ThemedView style={styles.titleContainer}>
            <ThemedText type="subtitle">{listStatus}</ThemedText>
          </ThemedView>
        }
      />

      <ThemedView style={styles.invisible}>
        <ThemedText type="subtitle">{filteredJson}</ThemedText>
      </ThemedView>

      {/* Floating button */}
      <FloatingButton />
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
  scrollStyle: {
    paddingHorizontal: 10,
    paddingVertical: 0,
    height: "30%",
  },
  flatlistStyle: {
    height: "70%",
  },
  textInputStyle: {
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#505050",
    backgroundColor: "#ffffff",
  },
  floatingButton: {
    backgroundColor: "#2196F3",
    width: 64,
    height: 64,
    borderRadius: 60,
    borderStyle: "solid",
    borderColor: "#2196F3",
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 40,
    right: 30,
    elevation: 5, // For Android shadow
    shadowColor: "#000", // For iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  invisible: {
    visibility: "hidden",
  },
  addIcon: {
    bottom: 1,
  },
});
