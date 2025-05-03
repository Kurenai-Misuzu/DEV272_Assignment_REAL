import React, { createContext, useState, useContext} from "react";

export type Venue = {
  ID: number; 
  Name: string; 
  Location: string; 
  Courts: number; 
  Price: number; 
  Description: string;
}

type VenueContextType = {
  venue: Venue;
  setVenue: React.Dispatch<React.SetStateAction<Venue>>
}

const VenueContext = createContext<VenueContextType | null>(null);

export const VenueContextProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
  const [venue, setVenue] = useState<Venue>({
    ID: 0, 
    Name: '',
    Location: '', 
    Courts: 0,
    Price: 0,
    Description: '',
  })
  
  return (
    <VenueContext.Provider value={{venue, setVenue}}>

    </VenueContext.Provider>
  )
}

export const useVenueContext = () => {
  const context = useContext(VenueContext);
  if (!context) { 
    throw new Error('useVenueContext must be used within it\'s appropriate provider!')
  }
  return context;
}