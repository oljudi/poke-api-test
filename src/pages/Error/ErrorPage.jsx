import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import { ContentWrapper, Wrapper } from "./ErrorPage.styled";

const ErrorPage = () => {
  const error = useRouteError();

  let errorMessage = "";

  if (isRouteErrorResponse(error)) {
    switch (error.status) {
      case 404:
        errorMessage = "This page doesn't exists";
        break;
      case 401:
        errorMessage = "Unauthorized";
        break;
      default:
        errorMessage = "Something went wrong!";
        break;
    }
  }

  return (
    <Wrapper id="error-page">
      <ContentWrapper>
        <h1>💀💀💀💀💀</h1>
        <h2>Something went wrong reaching this page</h2>
        <p>{errorMessage}</p>
      </ContentWrapper>
    </Wrapper>
  );
};

export default ErrorPage;
