import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// initialize an empty api service that we'll inject endpoints into later as needed
export const emptySplitApi = createApi({
    tagTypes: ['List','StarWar'],
    baseQuery: fetchBaseQuery({ baseUrl: 'https://swapi.dev/api/' }),
    endpoints: () => ({}),
    keepUnusedDataFor: 10000 * 60,
    
})