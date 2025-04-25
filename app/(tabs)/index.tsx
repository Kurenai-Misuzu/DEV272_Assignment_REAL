import { StyleSheet, ScrollView, FlatList, TextInput, Button } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import openCourts from '@/data/openCourts.json';
import { useState } from 'react';

import Card from '@/components/Card';

const DATA = openCourts;

export default function HomeScreen() {

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(DATA['Open Courts']);

  // Changes the data when the Search button is pressed
  const handleSearch = () => {
    
    const filtered = DATA['Open Courts'].filter((item) =>
      item.Name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredData(filtered);
  };

  // Changes the searchQuery when the text box is changed
  const changeSearch = (query: string) => {
    setSearchQuery(query);
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        
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
          renderItem={({item}) =>
            <Card name={item.Name} location={item.Location} courts={item.Courts} price={item.Price}/>
            
          }
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
