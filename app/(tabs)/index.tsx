import { StyleSheet, ScrollView, FlatList, TextInput, Button } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Stack } from 'expo-router';
import { useState } from 'react';

import { useVenueListContext } from '@/context/VenueListContext';
import { useVenueContext, Venue } from '@/context/VenueContext';

// my components
import Card from '@/components/Card';

// data

export default function HomeScreen() {
  const {venueList, addVenue, updateVenue} = useVenueListContext();

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(venueList);

  // Changes the data when the Search button is pressed
  const handleSearch = () => {
    
    const filtered = venueList.filter((item) =>
      item.Name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredData(filtered);
  };

  // Changes the searchQuery when the text box is changed
  const changeSearch = (query: string) => {
    setSearchQuery(query);
  }

  // // context
  // const [venue] = useState<Venue>({
  //   venueID: 0,
  //   venueName: '',
  //   venueLocation: '',
  //   venueCourts: 0,
  //   venuePrice: 0,
  //   venueDescription: ''
  // })

  // this is extremely dirty plese let me know if there is a better way to do this
  const setVenueAndRender = (item:Venue) => {
    const {setVenue} = useVenueContext();
    setVenue({
      ID: item.ID, 
      Name: item.Name,
      Location: item.Location, 
      Courts: item.Courts,
      Price: item.Price,
      Description: item.Description,
    })

    return (
      <Card />
    )
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Stack.Screen options={{ title: 'Home'}} />
        {/* Scrollview */}

        <ScrollView style={styles.scrollStyle}>
          <ThemedView style={styles.titleContainer}>
            <ThemedText type="title">Pickup Court Finder</ThemedText>
          </ThemedView>
          <ThemedView style={styles.stepContainer}>
            <ThemedText type="subtitle">Open Volleyball courts near you!</ThemedText>
          </ThemedView> 

          {/* Text Input */}

          <TextInput 
            style={styles.textInputStyle}
            placeholder={'Search'}
            value={searchQuery}
            onChangeText={changeSearch}
          /> 

          {/* Button */}

          <Button
            title='Search'
            onPress={handleSearch}
          />

        </ScrollView>

        {/* FlatList */}
        <FlatList
          style={styles.flatlistStyle}
          data={filteredData} 
          renderItem={({item}) => setVenueAndRender(item)}
        />

      </SafeAreaView>
    </SafeAreaProvider>
  );
}



const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    padding: 10,
    paddingTop: 30
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
    padding: 10
  },
  scrollStyle: {
    paddingHorizontal: 10,
    paddingVertical: 0,
    height: '30%'
  },
  flatlistStyle: {
    height: '70%'
  }, 
  textInputStyle: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#505050',
    backgroundColor: '#ffffff',
  }
});
