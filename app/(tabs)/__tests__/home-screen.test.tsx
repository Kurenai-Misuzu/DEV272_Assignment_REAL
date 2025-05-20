import HomeScreen from "..";

import { render, screen} from "@testing-library/react-native";

import { VenueListContextProvider } from "@/context/VenueListContext";
import { VenueContextProvider } from "@/context/VenueContext";
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from "@/app/_layout";

describe('initial test of rendering homescreen', () => {

    const customRender = () => {
        return render(
            <QueryClientProvider client={queryClient}>
                <VenueListContextProvider>
                    <VenueContextProvider>
                        <HomeScreen />
                    </VenueContextProvider>
                </VenueListContextProvider>
            </QueryClientProvider>
        );
    }


    test('Checks if text is rendered', () => {


        customRender();
        
        expect(screen.getByText('Pickup Court Finder')).toBeTruthy();
    });
})