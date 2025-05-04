import { StyleSheet, Button } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useLocalSearchParams, Link, Stack } from 'expo-router';

export default function Details() {
    const params = useLocalSearchParams();
    

    return (
        <SafeAreaProvider>
            <SafeAreaView>
                <ThemedView style={styles.titleContainer}>
                <Stack.Screen options={{ title: params.name.toString() }} />
                    <ThemedText type='title'>{params.name}</ThemedText>
                    <ThemedText type='subtitle'>{params.description}</ThemedText>
                    <ThemedView style={styles.listItemStyle}>
                        <ThemedText type='default'>Location: {params.location}</ThemedText>
                        <ThemedText type='default'>Courts: {params.courts}</ThemedText>
                        <ThemedText type='default'>Price: ${params.price}</ThemedText>
                    </ThemedView>
                    <Link href="/" dismissTo asChild>
                        <Button title='Back to Home' />
                    </Link>
                </ThemedView>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 8,
    padding: 10,
    paddingTop: 30
  },
  listItemStyle: {
    flexDirection: 'row',
    gap: 20,   
},
});