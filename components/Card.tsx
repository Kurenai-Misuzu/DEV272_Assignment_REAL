import React, { useState } from "react";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";
import { StyleSheet,} from "react-native";


import { useVenueContext } from "@/context/VenueContext";
import { Link } from "expo-router";
import { Button } from "react-native";



export default function Card() {
    const {venue} = useVenueContext();
    return (
        <ThemedView style={styles.listContainer} lightColor='#bdbdbd' darkColor='#5c5c5c'>
            <ThemedText type="subtitle">{venue.Name}</ThemedText>
            <ThemedView style={styles.listItemStyle} lightColor='#bdbdbd' darkColor='#5c5c5c'>
                <ThemedText type="default">Location: {venue.Location}</ThemedText>
                <ThemedText type="default">Courts: {venue.Courts}</ThemedText>
                <ThemedText type="default">Price: ${venue.Price}</ThemedText>
            </ThemedView>

            {/*details button */}
            <Link href={{ pathname:'/details/[id]', params: { 
                id: venue.ID, 
                name: venue.Name,
                price: venue.Price,
                courts: venue.Courts,
                description: venue.Description,
                location: venue.Location,
                
                }}} push asChild>
                <Button title='See Details'/> 
            </Link>

        </ThemedView> 
    )
}

const styles = StyleSheet.create({
    listItemStyle: {
        flexDirection: 'row',
        gap: 20,   
    },
    listContainer: {
        flexDirection: 'column',
        padding: 20,
        margin: 10,
    }
})