import styled from "styled-components";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentWrapper = styled.div`
  width: 60%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 24px;
  h2 {
    font-size: 40px;
    font-weight: bolder;
  }
  p {
    color: #fff;
    font-weight: bolder;
  }
`;

export { Wrapper, ContentWrapper };
