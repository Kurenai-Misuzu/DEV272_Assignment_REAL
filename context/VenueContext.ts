import { createContext, useContext} from "react";

export type Venue = {
  venueID: number,
  venueName: string,
  venueLocation: string,
  venueCourts: number,
  venuePrice: number,
  venueDescription: string
}

export const VenueContext = createContext<Venue>({
    venueID: 0,
    venueName: '',
    venueLocation: '',
    venueCourts: 0,
    venuePrice: 0,
    venueDescription: ''
})