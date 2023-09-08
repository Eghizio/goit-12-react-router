import { Link } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "../../context/AuthProvider";

export const Home = () => {
  const { user, login, logout } = useAuth();

  return (
    <main>
      <h1>Hello there!</h1>
      <AuthContainer>
        <div>I am currently {user ? "logged in" : "not logged in"}</div>
        <button onClick={() => login({ name: "Kuba", premium: true })}>
          Login
        </button>
        <button onClick={logout}>Logout</button>
      </AuthContainer>

      <Nav>
        <Link to="/dupa">Some non-existing page</Link>
        <Link to="/private">Private page</Link>
        <Link to="/product?from=Kuba">Product page from Kuba</Link>
        <Link to="/search">Search page</Link>
      </Nav>
    </main>
  );
};

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const AuthContainer = styled.div`
  padding: 1rem;
`;
