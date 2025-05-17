import HomeScreen from "../(tabs)";

import { render } from "@testing-library/react-native";

import { VenueListContextProvider } from "@/context/VenueListContext";
import { VenueContextProvider } from "@/context/VenueContext";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { NavigationContainer } from "@react-navigation/native";
import { Stack } from "expo-router";

describe('initial test of rendering homescreen', () => {
    test('Checks if text is rendered', () => {

        const queryClient = new QueryClient();


        const { getByText } = render(
            <QueryClientProvider client={queryClient}>
                <VenueListContextProvider>
                    <VenueContextProvider>
                        <HomeScreen />
                    </VenueContextProvider>
                </VenueListContextProvider>
            </QueryClientProvider>
    );

        expect(getByText('Open Volleyball courts near you!')).toBeTruthy();
    });
})