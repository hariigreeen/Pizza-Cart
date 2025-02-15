import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const dissertsApi = createApi({
  reducerPath: 'dissertsApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'https://pizza-and-desserts.p.rapidapi.com/desserts',
    prepareHeaders: (headers) => {
        headers.set('x-rapidapi-key', `c7100f9e34msh9a14739e728751dp14816ajsn3caaa2ea27a3`)
        headers.set('x-rapidapi-host', `pizza-and-desserts.p.rapidapi.com`)
        return headers
    }
   }),
  
  endpoints: (builder) => ({
    getAllDisserts: builder.query({
      query: () => `/`,
    }),
  }),
})


export const { useGetAllDissertsQuery } = dissertsApi