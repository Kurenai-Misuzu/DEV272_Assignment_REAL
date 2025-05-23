import HomeScreen from "..";

import { render, screen, fireEvent } from "@testing-library/react-native";

import { VenueListContextProvider } from "@/context/VenueListContext";
import { VenueContextProvider } from "@/context/VenueContext";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/app/_layout";

describe("initial test of rendering homescreen", () => {
  const customRender = () => {
    return render(
      <QueryClientProvider client={queryClient}>
        <VenueListContextProvider>
          <VenueContextProvider>
            <HomeScreen />
          </VenueContextProvider>
        </VenueListContextProvider>
      </QueryClientProvider>,
    );
  };

  test("Checks if search filters properly", () => {
    customRender();

    const searchInput = screen.queryByPlaceholderText("Search");
    expect(searchInput).toBeTruthy();

    // check for red
    fireEvent.changeText(searchInput, "red");

    // press search button
    fireEvent.press(screen.getByText("Search"));

    // checks if redmond is there
    expect(
      screen.getByText(
        '[{"ID":1,"Name":"Redmond Commuinty & Senior Center","Location":"Redmond","Courts":1,"Price":8,"Description":"A 52K square foot space that was designed for everyone. Contains several courts and is a great place for socialization!"}]',
      ),
    ).toBeTruthy();
  });
});
