import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import { RootObject } from './types';
import { searchIMDBRootObj } from "./searchIMDBTypes";
import { weeKTopRootObj } from "./weekTopTypes";
import { whatsStreamingRootObj } from "./whatsStreamingTypes";

type QueryResponse = RootObject;

export const movieApi = createApi({
    reducerPath: 'movieApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://imdb188.p.rapidapi.com/api/v1',
        prepareHeaders: (headers) => {
            headers.set('x-rapidapi-host', 'imdb188.p.rapidapi.com')
            headers.set('x-rapidapi-key','8a178a2445msh6df3bac792efd69p1147d4jsn2d49a7aa75e0')
            return headers
        }
    }),
    endpoints: (builder) => ({
        getFanFavourites: builder.query<RootObject, void>({query: () => '/getFanFavorites?country=US'}),
        searchIMDB: builder.query<searchIMDBRootObj, void>({query: () => '/searchIMDB'}),
        getWeekTop10: builder.query<weeKTopRootObj, void>({query: () => '/getWeekTop10'}),
        getWhatsStreaming: builder.query<whatsStreamingRootObj, void>({query: () => 'getWhatsStreaming?country=US'})
    })
})

export const { useGetFanFavouritesQuery, useGetWeekTop10Query, useSearchIMDBQuery, useGetWhatsStreamingQuery } = movieApi;