import { createSlice } from "@reduxjs/toolkit";

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    isLoading: true,
    hasError: false,
    pokemons: [],
    pokemon: {},
    initImg: "",
    page: 0,
  },
  reducers: {
    setIsLoadingPokemons: (state, action) => {
      state.isLoading = action.payload.isLoading;
    },
    setPokemons: (state, action) => {
      state.initImg = action.payload.initImg;
      state.pokemons = action.payload.pokemons;
      state.pokemon = action.payload.pokemon;
    },
    setError: (state) => {
      state.isLoading = false;
      state.hasError = true;
    },
    default: (state) => state,
  },
});

export const { setIsLoadingPokemons, setPokemons, setError } =
  pokemonSlice.actions;

export default pokemonSlice.reducer;
