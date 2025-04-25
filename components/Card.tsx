import React, { useState } from "react";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";
import { StyleSheet,} from "react-native";


import { Venue, VenueContext } from "@/context/VenueContext";
import { Link } from "expo-router";
import { Button } from "react-native";

export type CardProps = {
    id: number;
    name: string;
    location: string;
    courts: number;
    price: number;
    desc: string;
};

export default function Card({
    id,
    name,
    location,
    courts,
    price,
    desc
}: CardProps) {

    const [venue, setVenue] = useState<Venue>({
        venueID: id,
        venueName: name,
        venueLocation: location,
        venueCourts: courts,
        venuePrice: price,
        venueDescription: desc
    })

    return (
        <ThemedView style={styles.listContainer} lightColor='#bdbdbd' darkColor='#5c5c5c'>
            <ThemedText type="subtitle">{name}</ThemedText>
            <ThemedView style={styles.listItemStyle} lightColor='#bdbdbd' darkColor='#5c5c5c'>
                <ThemedText type="default">Location: {location}</ThemedText>
                <ThemedText type="default">Courts: {courts}</ThemedText>
                <ThemedText type="default">Price: ${price}</ThemedText>
            </ThemedView>

            {/*details button */}
            <VenueContext.Provider value={venue}>
                <Link href={{ pathname:'/details/[id]', params: { id: venue.venueID }}} push asChild>
                    <Button title='See Details' onPress={() => setVenue(venue)}/> 
                </Link>
            </VenueContext.Provider>

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