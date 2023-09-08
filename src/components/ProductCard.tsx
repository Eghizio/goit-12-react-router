import { Link } from "react-router-dom";
import styled from "styled-components";

interface Props {
  name: string;
  price: number;
  discount: string | null;
}

export const ProductCard = ({ name, price, discount }: Props) => {
  return (
    <Card>
      <img src="https://picsum.photos/100" alt={name} />
      <ProductName>{name}</ProductName>
      <Price price={price} discount={discount} />
      <Link to="/product/details" state={{ name, price, discount }}>
        See details
      </Link>

      {discount && <Discount>DISCOUNT {discount}%</Discount>}
    </Card>
  );
};

// Price.tsx
const Price = ({
  price,
  discount,
}: {
  price: number;
  discount: string | null;
}) => {
  const parsedDiscount = discount ? parseInt(discount, 10) / 100 : 0;
  const discountedPrice = price * (1 - parsedDiscount);

  return <StyledPrice>{discountedPrice.toFixed(2)} $</StyledPrice>;
};

const StyledPrice = styled.span`
  color: green;
`;

const Card = styled.article`
  padding: 1rem;
  border: 1px solid gray;
  display: flex;
  flex-direction: column;
  width: 300px;
`;

const ProductName = styled.span`
  font-weight: bold;
`;

const Discount = styled.div`
  background-color: red;
  color: white;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
`;
