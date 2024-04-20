import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 5%;
  height: 50vh;
  .left-container {
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    width: 30%;
  }
  .right-container {
    display: flex;
    flex-direction: column;
    width: 70%;
    overflow: scroll;
    .pokemon-list {
      height: 90%;
      overflow: scroll;
    }
    .pagination {
      width: 100%;
      display: flex;
      justify-content: space-around;
      height: 10%;
      padding: 20px 0;
      button {
        width: 10%;
        font-weight: bold;
        border: red solid 2px;
        border-radius: 10px;
        background-color: transparent;
      }
      button:hover {
        color: white;
        background-color: rgb(255, 0, 0, 0.8);
      }
    }
  }
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    padding: 0;
    height: 100%;
    .left-container {
      width: 100%;
    }
    .right-container {
      width: 100%;
      .pagination {
        button {
          width: 100%;
        }
      }
    }
  }
`;

const PokemonCharacter = styled.li`
  border-radius: 10px;
  padding: 5px;
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  width: 90%;
  border-radius: 10px;
  box-shadow: 3px 5px 6px 1px rgba(0, 0, 0, 0.2);
  span {
    text-transform: capitalize;
  }
  .pokeball {
    img {
      width: 30px;
      height: 30px;
    }
  }
`;

export { Wrapper, PokemonCharacter };
