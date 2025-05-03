import { createContext, useContext, useState } from "react";
import openCourts from '@/data/openCourts.json';
import { Venue } from "./VenueContext";

const data = openCourts['Open Courts'];


// data types
type VenueContextListType = {
    venueList: Venue[];
    addVenue: (venueToAdd: Venue) => void;
    updateVenue: (venueID: number, updatedVenue: Partial<Venue>) => void;
}

// create context
const VenueListContext = createContext<VenueContextListType | null>(null);

// PROVIDER
export const VenueListContextProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
    const [venueList, setVenueList] = useState<Venue[]>(data as Venue[]);

    const addVenue = (venueToAdd: Venue ) => {
        setVenueList((currentList) => [...currentList, venueToAdd]);
    }

    const updateVenue = (venueID: number, updatedVenue: Partial<Venue>) => {
        setVenueList((prev) =>
            prev.map((venue) =>
                // if venue id matches, then update that venue, else leave it alone
                venue.ID === venueID ? { ...venue, ...updateVenue} : venue
            )
        )
    }
    
    return (
        <VenueListContext.Provider value={{venueList, addVenue, updateVenue}}>
            {children}
        </VenueListContext.Provider>
    )
}

export const useVenueListContext = () => {
    const context = useContext(VenueListContext);
    if (!context) {
        throw new Error('useVenueListContext must be used within it\'s appropriate provider!');
    }
    return context;
}