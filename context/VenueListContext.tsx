import { createContext, useContext, useState, useEffect } from "react";

import { Venue } from "./VenueContext";
import { supabase } from "@/data/supabase";

// fetch data from supabase
export const fetchVenues = async () => {
    const { data, error } = await supabase
        .from('open-courts')
        .select();

    if (error) throw error;
    return data;

    
}

// data types
type VenueContextListType = {
    venueList: Venue[];
    addVenue: (venueToAdd: Venue) => void;
    updateVenue: (venueID: number, updatedVenue: Partial<Venue>) => void;
    setVenueList:  (value: React.SetStateAction<Venue[]>) => void;
}

// create context
const VenueListContext = createContext<VenueContextListType | null>(null);

// PROVIDER
export const VenueListContextProvider: React.FC<{children: React.ReactNode}> = ({children}) => {

    const [venueList, setVenueList] = useState<Venue[]>([]);

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
        <VenueListContext.Provider value={{venueList, setVenueList, addVenue, updateVenue}}>
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