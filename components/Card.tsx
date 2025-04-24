import React from "react";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";

import { StyleSheet } from "react-native";

export type CardProps = {
    name: string;
    location: string;
    courts: number;
    price: number;
};

export default function Card({
    name,
    location,
    courts,
    price
}: CardProps) {
    return (
        <ThemedView style={styles.listContainer} lightColor='#bdbdbd' darkColor='#5c5c5c'>
            <ThemedText type="subtitle">{name}</ThemedText>
            <ThemedView style={styles.listItemStyle} lightColor='#bdbdbd' darkColor='#5c5c5c'>
            <ThemedText type="default">Location: {location}</ThemedText>
            <ThemedText type="default">Courts: {courts}</ThemedText>
            <ThemedText type="default">Price: ${price}</ThemedText>
            </ThemedView>
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