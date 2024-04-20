import { setIsLoadingPokemons, setPokemons, setError } from "./pokemonSlice";

const pokeAPI = "https://pokeapi.co/api/v2/pokemon";

export const getPokemons =
  (page = 0) =>
  async (dispatch) => {
    dispatch(setIsLoadingPokemons({ isLoading: true }));
    try {
      const pokemonAPI = `${pokeAPI}/?limit=20&offset=${page * 20}`;

      const resp = await fetch(`${pokemonAPI}`);
      const data = await resp.json();

      // get image for initial page
      const { results } = data;
      for await (let result of results) {
        const resp = await fetch(result.url);
        const data = await resp.json();
        const { id, sprites } = data;
        const { front_default: imgSrc } = sprites;
        result.imgSrc = imgSrc;
        result.id = id;
      }
      // set a random image into store
      const randomNumber = Math.round(Math.random() * data.results.length);
      const initImg = data.results[randomNumber]?.imgSrc;
      dispatch(setPokemons({ pokemons: data.results, page, initImg }));
      dispatch(setIsLoadingPokemons({ isLoading: false }));
    } catch (error) {
      dispatch(setError());
    }
  };

export const getPokemon =
  (id = 0) =>
  async (dispatch) => {
    dispatch(setIsLoadingPokemons({ isLoading: true }));
    try {
      const pokemonDetail = `${pokeAPI}/${id}`;
      const resp = await fetch(pokemonDetail);
      const data = await resp.json();
      dispatch(setPokemons({ pokemon: { ...data } }));
      dispatch(setIsLoadingPokemons({ isLoading: false }));
    } catch (error) {
      dispatch(setError());
    }
  };
