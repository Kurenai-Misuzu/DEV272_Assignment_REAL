import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/data/supabase";
import { useVenueListContext } from "@/context/VenueListContext";
import { useEffect } from "react";

// use tanstack query 
export const queryVenues = () => {
    // set up use query
    const {data, isLoading, error} = useQuery({ queryKey: ['VenueList'], queryFn: async () => {
        const { data } = await supabase
        .from('open-courts')
        .select();
        return data;
    }});
    // set the venue list with the fetched data
    const {setVenueList} = useVenueListContext();
    useEffect(() => {
        if (data) {
            setVenueList(data);
        };
    }, [data]);

    //error checking
    if (error) return 'Query Error';

    // loading
    if (isLoading) return 'Loading...';

    // this return is jank because it returns a string that changes the flatlist's ListEmptyComponent
    return 'No results found!';
    
}   