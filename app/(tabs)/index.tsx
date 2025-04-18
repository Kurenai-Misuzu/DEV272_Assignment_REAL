import { StyleSheet, ScrollView, FlatList, TextInput, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import openCourts from '@/data/openCourts.json';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const DATA = openCourts;

export default function HomeScreen() {
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
          /> 

          {/* Button */}

          <Button
            title='Search'
          />

        </ScrollView>

        {/* FlatList */}

        <FlatList
          style={styles.flatlistStyle}
          data={DATA['Open Courts']} 
          renderItem={({item}) =>
            <ThemedView style={styles.listContainer}>
              <ThemedText type="subtitle">{item.Name}</ThemedText>
              <ThemedView style={styles.listItemStyle}>
                <ThemedText type="default">Location: {item.Location}</ThemedText>
                <ThemedText type="default">Courts: {item.Courts}</ThemedText>
                <ThemedText type="default">Price: ${item.Price}</ThemedText>
              </ThemedView>
            </ThemedView>  
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
    padding: 10
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
  listItemStyle: {
    flexDirection: 'row',
    gap: 20,
    backgroundColor: '#5c5c5c',
  },
  listContainer: {
    flexDirection: 'column',
    padding: 20,
    backgroundColor: '#5c5c5c',
    margin: 10,
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
