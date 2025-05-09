# Assignment 2

This is a landing page made with Expo

# Assignment 3

As of 2025-04-29, this has now been renamed to DEV272_Assignment_REAL. Future assignments will also use this repo.
Please check the commit history and log for dates.


# Assignment 5 update

 the supabase configuration is a simple table with 6 columns:
- ID (primary key) (numeric)
- Name (text)
- Location (text)
- Courts (numeric)
- Price (numeric)
- Description (text)

Enable row security is turned off.

React-Query is used to manage the the querying. The way I have it set up on here is that I have a system where every 30 seconds it refreshes to make sure the data doesn't get too stale. 

Async storage is stored to after the api call. the get function is called at the start of the function if the key isn't empty.