import HomeScreen from "../(tabs)";

import { render } from "@testing-library/react-native";

import { useVenueListContext } from "@/context/VenueListContext";

describe('initial test of rendering homescreen', () => {
    test('Checks if text is rendered', () => {
        const { getByText } = render(<HomeScreen />);

        expect(getByText('Open Volleyball courts near you!')).toBeTruthy();
    });
})