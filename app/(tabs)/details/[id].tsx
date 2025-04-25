import { StyleSheet } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { VenueContext } from '@/context/VenueContext';
import { useContext } from 'react';
import { useLocalSearchParams } from 'expo-router';

export default function Details() {
    const venue = useContext(VenueContext);
    const params = useLocalSearchParams();
    
    return (
        <SafeAreaProvider>
            <SafeAreaView>
                <ThemedView>
                    <ThemedText type='title'>Title {params.id}</ThemedText>
                    <ThemedText type='title'>{venue.venueName}</ThemedText>
                    <ThemedText type='subtitle'>{venue.venueDescription}</ThemedText>
                </ThemedView>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    padding: 10,
    paddingTop: 30
  }
});