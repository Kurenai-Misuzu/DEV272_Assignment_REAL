import React, { useState } from "react";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";
import { StyleSheet,} from "react-native";


import { VenueContext } from "@/context/VenueContext";
import { Link } from "expo-router";
import { Button } from "react-native";
import { useContext } from "react";



export default function Card() {
    const venue = useContext(VenueContext);
    return (
        <ThemedView style={styles.listContainer} lightColor='#bdbdbd' darkColor='#5c5c5c'>
            <ThemedText type="subtitle">{venue.venueName}</ThemedText>
            <ThemedView style={styles.listItemStyle} lightColor='#bdbdbd' darkColor='#5c5c5c'>
                <ThemedText type="default">Location: {venue.venueLocation}</ThemedText>
                <ThemedText type="default">Courts: {venue.venueCourts}</ThemedText>
                <ThemedText type="default">Price: ${venue.venuePrice}</ThemedText>
            </ThemedView>

            {/*details button */}
            <Link href={{ pathname:'/details/[id]', params: { 
                id: venue.venueID, 
                name: venue.venueName,
                price: venue.venuePrice,
                courts: venue.venueCourts,
                description: venue.venueDescription,
                location: venue.venueLocation,
                
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