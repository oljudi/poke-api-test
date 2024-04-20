import { configureStore } from "@reduxjs/toolkit";

import pokemonReducer from "./slices/pokemons/pokemonSlice";

export default configureStore({
  reducer: {
    pokemon: pokemonReducer,
  },
});
