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
    padding: 0 30px;
    .goback:hover {
      cursor: pointer;
      color: red;
    }
    .top-details {
      width: 100%;
      &__title {
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;
        row-gap: 20px;
        flex-direction: column;
        font-size: 20px;
        .content {
          span {
            font-size: 17px;
            margin-right: 10px;
            text-transform: capitalize;
          }
        }
      }
      &__basic-stats {
        display: flex;
        justify-content: space-between;
        padding: 20px 30px;
        font-size: 17px;
        div {
          span {
            text-transform: capitalize;
          }
        }
      }
    }
    .content-container {
      display: flex;
      &__stats {
        width: 50%;
        &__stat {
          margin-bottom: 15px;
          text-transform: capitalize;
          display: flex;
          justify-content: space-between;
        }
      }
      &__abilities {
        width: 50%;
        display: flex;
        align-items: center;
        row-gap: 20px;
        flex-direction: column;
        text-transform: capitalize;
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
      padding: 0;
      .top-details {
        &__basic-stats {
          padding: 0;
          flex-direction: row;
          gap: 10px;
          margin: 10px 0;
        }
      }
      .content-container {
        flex-direction: column;
        &__stats {
          width: 100%;
        }
        &__abilities {
          width: 100%;
        }
      }
    }
  }
`;

export { Wrapper };
