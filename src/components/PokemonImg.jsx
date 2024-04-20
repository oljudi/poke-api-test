import PropTypes from "prop-types";
import Loader from "react-js-loader";

const PokemonImg = ({ src }) =>
  src ? (
    <img src={src} alt="selected-pokemon" />
  ) : (
    <Loader type="bubble-scale" bgColor={"red"} color={"red"} size={30} />
  );

PokemonImg.propTypes = {
  src: PropTypes.string,
};

export default PokemonImg;
