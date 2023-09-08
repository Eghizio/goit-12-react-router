import styled from "styled-components";
import { ProductCard } from "./ProductCard";
import { useSearchParams } from "react-router-dom";

interface Product {
  name: string;
  price: number;
  discount: string | null;
}

const products: Product[] = [
  { name: "Something discounted", price: 34.23, discount: "10" },
  { name: "Wine", price: 51.24, discount: null },
  { name: "React Book", price: 5.2, discount: null },
  { name: "Bun", price: 6.4, discount: null },
  { name: "Super product", price: 1337.5, discount: "25" },
];

// products are fetched from API and retrieved from custom hook here: useProducts();
const useProducts = () => products;

export const ProductsList = () => {
  const products = useProducts();
  const [searchParams] = useSearchParams();

  const searchQuery = searchParams.get("search") ?? "";

  const displayedProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container>
      {displayedProducts.map((product) => (
        <ProductCard key={product.name} {...product} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  gap: 2rem;
`;
