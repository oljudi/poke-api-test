import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loader from "react-js-loader";

import { PokemonCharacter, Wrapper } from "./Home.styled";
import { getPokemons } from "../../store/slices/pokemons/pokemonThunks";

import constants from "../../constants";

import PokemonImg from "../../components/PokemonImg";

const Pokemon = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { isLoading, pokemons, initImg, hasError } = useSelector(
    (state) => state.pokemon
  );
  const [pokemonImg, setPokemonImg] = useState();
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    dispatch(getPokemons(currentPage));
  }, [dispatch, currentPage]);

  useEffect(() => {
    setPokemonImg(initImg);
  }, [isLoading, initImg, currentPage]);

  const handleRedirect = (img, id) => {
    if (img === pokemonImg) {
      navigate("/pokemon/" + id);
    } else {
      setPokemonImg(img);
    }
  };

  if (hasError) {
    throw new Response("Not Found", { status: 404 });
  }

  return (
    <>
      {isLoading ? (
        <Loader type="bubble-scale" bgColor={"red"} color={"red"} size={20} />
      ) : (
        <Wrapper>
          <div className="left-container">
            {/* pokemon api image */}
            <img src={constants.pokeApiImage} alt="pokeApiLogo" />
            {/* pokemon image */}
            <PokemonImg src={pokemonImg} />
          </div>
          <div className="right-container">
            <div className="pokemon-list">
              <ul>
                {pokemons?.map((pokemon) => (
                  <PokemonCharacter
                    key={pokemon.name}
                    onClick={() => handleRedirect(pokemon.imgSrc, pokemon.id)}
                  >
                    <span>{pokemon.name}</span>
                    <div className="pokeball">
                      <img src={constants.pokeballImage} alt={pokemon.name} />
                    </div>
                  </PokemonCharacter>
                ))}
              </ul>
            </div>
            <div className="pagination">
              <button
                hidden={currentPage === 0}
                onClick={() =>
                  setCurrentPage(currentPage === 0 ? 0 : currentPage - 1)
                }
              >
                Prev
              </button>
              <button onClick={() => setCurrentPage(currentPage + 1)}>
                Next
              </button>
            </div>
          </div>
        </Wrapper>
      )}
    </>
  );
};

export default Pokemon;
