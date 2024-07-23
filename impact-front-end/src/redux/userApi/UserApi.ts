import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// import type { Pokemon } from './types'

// Define a service using a base URL and expected endpoints
export const userApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3002' }),
  endpoints: (builder) => ({
    // dummyData: builder.query<any, string>({
    //   query: (name) => `/products`,
    // }),


    // getUsers: builder.query({
    //   query: () => ({
    //     url: '/User/login/',
    //     method: 'Get',
    //   }),
    // }),

    loginUser: builder.mutation({
      query: (dummyBody) => ({
        url: '/user/login',
        method: 'POST',
        body: dummyBody,
      }),
    }),

    addUser: builder.mutation({
      query: (con:any) => ({
          url:"/user/signUp",
          method:"POST",
          body: con
      })
  })


  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useLoginUserMutation, useAddUserMutation } = userApi









// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// import type { Pokemon } from './types'

// // Define a service using a base URL and expected endpoints
// export const pokemonApi = createApi({
//   reducerPath: 'pokemonApi',
//   baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
//   endpoints: (builder) => ({
//     getPokemonByName: builder.query<Pokemon, string>({
//       query: (name) => `pokemon/${name}`,
//     }),
//   }),
// })

// // Export hooks for usage in functional components, which are
// // auto-generated based on the defined endpoints
// export const { useGetPokemonByNameQuery } = pokemonApi