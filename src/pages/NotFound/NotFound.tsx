import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export const NotFound = () => {
  const navigate = useNavigate();

  const goHome = () => navigate("/");

  return (
    <main>
      <h1>Page not found</h1>
      <HomeLink onClick={goHome}>Go back to the main page</HomeLink>
    </main>
  );
};

const HomeLink = styled.p`
  cursor: pointer;
  text-decoration: underline;
  &:hover {
    color: blue;
  }
`;
