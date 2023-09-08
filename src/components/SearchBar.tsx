import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

export const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [, setSearchParams] = useSearchParams();

  useEffect(() => {
    setSearchParams((params) => {
      if (query) {
        params.set("search", query);
        return params;
      }
      params.delete("search");
      return params;
    });
  }, [query, setSearchParams]);

  return (
    <Padding>
      <SearchBarInput
        type="text"
        placeholder="Search for products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </Padding>
  );
};

const Padding = styled.div`
  display: flex;
  padding: 1rem 0;
`;

const SearchBarInput = styled.input`
  width: 100%;
`;
