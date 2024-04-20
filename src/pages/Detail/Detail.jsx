import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "react-js-loader";

import { getPokemon } from "../../store/slices/pokemons/pokemonThunks";
import { Wrapper } from "./Detail.styled";
import constants from "../../constants";
import PokemonImg from "../../components/PokemonImg";

const PokemonDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { pokemon, isLoading } = useSelector((state) => state.pokemon);

  useEffect(() => {
    dispatch(getPokemon(id));
  }, []);

  const stats = [
    "hp",
    "attack",
    "defense",
    "special-attack",
    "special-defense",
    "speed",
  ];

  const buildStat = () => {
    if (pokemon) {
      return pokemon?.stats?.filter((stat) => stats.includes(stat.stat.name));
    }
    return [];
  };

  const handleGoBack = () => navigate("/");

  return (
    <>
      {!isLoading ? (
        <Wrapper>
          <div className="left-container">
            {/* pokemon api image */}
            <img src={constants.pokeApiImage} alt="pokeApiLogo" />
            {/* pokemon image */}
            <PokemonImg src={pokemon?.sprites?.front_default} />
          </div>
          <div className="right-container">
            <div onClick={handleGoBack} className="goback">{`<< Go back`}</div>
            <div className="top-details">
              <div className="top-details__title">
                <span>Type:</span>
                <div className="content">
                  {pokemon?.types?.map((type) => (
                    <span key={type.type?.name}>{type.type?.name}</span>
                  ))}
                </div>
              </div>
              <div className="top-details__basic-stats">
                <div>
                  Number: <span>{pokemon?.id}</span>{" "}
                </div>
                <div>
                  Name: <span>{pokemon?.name}</span>
                </div>
                <div>
                  Height: <span>{pokemon?.height}</span>
                </div>
                <div>
                  Weight: <span>{pokemon?.weight}</span>
                </div>
              </div>
            </div>
            <div className="content-container">
              <div className="content-container__stats">
                <div className="content-container__stats__stat">Stats</div>
                {buildStat().map((e, i) => (
                  <div key={i} className="content-container__stats__stat">
                    <div className="title">{e.stat.name}</div>
                    <div className="content">
                      <span>{e.base_stat}</span>
                      <input type="range" value={e.base_stat} readOnly />
                    </div>
                  </div>
                ))}
              </div>
              <div className="content-container__abilities">
                <div>Abilities</div>
                {pokemon?.abilities?.map((e, i) => (
                  <div key={i}>{e.ability.name}</div>
                ))}
              </div>
            </div>
          </div>
        </Wrapper>
      ) : (
        <Loader type="bubble-scale" bgColor={"red"} color={"red"} size={20} />
      )}
    </>
  );
};

export default PokemonDetail;
