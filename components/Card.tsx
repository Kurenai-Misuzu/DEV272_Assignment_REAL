import React from "react";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";

import { StyleSheet, Pressable} from "react-native";

export type CardProps = {
    name: string;
    location: string;
    courts: number;
    price: number;
};

const onPressHandler = () => {
    // temporary will probably be used for navigation
    console.log('button pressed');
}

export default function Card({
    name,
    location,
    courts,
    price
}: CardProps) {
    return (
        <Pressable onPress={onPressHandler}>
            <ThemedView style={styles.listContainer} lightColor='#bdbdbd' darkColor='#5c5c5c'>
                <ThemedText type="subtitle">{name}</ThemedText>
                <ThemedView style={styles.listItemStyle} lightColor='#bdbdbd' darkColor='#5c5c5c'>
                <ThemedText type="default">Location: {location}</ThemedText>
                <ThemedText type="default">Courts: {courts}</ThemedText>
                <ThemedText type="default">Price: ${price}</ThemedText>
                </ThemedView>
            </ThemedView> 
        </Pressable>
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