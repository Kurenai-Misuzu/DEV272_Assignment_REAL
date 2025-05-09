import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/data/supabase";
import { useVenueListContext } from "@/context/VenueListContext";
import { use, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const queryVenues = () => {

    const {setVenueList} = useVenueListContext(); 

    // load from async data
    if (getVenues() !== null){
        getVenues().then((data) => {setVenueList(data)});
    }

    // tanstack query
    const {data, isLoading, error, isStale} = useQuery({ 
        staleTime: 30000,
        refetchInterval: 30000,
        queryKey: ['VenueList'], 
        queryFn: async () => {
            const { data } = await supabase
            .from('open-courts')
            .select();
            return data;
        },  
    });

    // set the venue list with the fetched data
    useEffect(() => {
        if (data) {
            setVenueList(data);
        };
        // store async data
        storeVenues();
    }, [data]);

    //error checking
    if (error) return 'Query Error';

    // loading
    if (isLoading) return 'Loading...';

    // this return is jank because it returns a string that changes the flatlist's ListEmptyComponent
    return 'No results found!';
    
}

// store venue into local storage
export const storeVenues = async () => {

    const {venueList} = useVenueListContext();
    try {
        const jsonVenueList = JSON.stringify(venueList);
        await AsyncStorage.setItem('VenueList', jsonVenueList);
    } catch (e) {
        console.error('Error storing data: ', e);
    }
}

// retrieve venue from local storage
const getVenues = async ()  => {
    try {
        const value = await AsyncStorage.getItem('VenueList');
        if (value?.length){
            const length = value.length;
            if (length > 2) { 
                return JSON.parse(value);
            } else {
                return null;
            }
        }
    
    } catch (e) {
      console.error('Error retrieving data:', e);
      return null;
    }
  };