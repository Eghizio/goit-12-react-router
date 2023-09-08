import { useLocation } from "react-router-dom";

export const ProductDetails = () => {
  const { state } = useLocation();

  return (
    <main>
      <span>Product details:</span>

      <div>
        <h1>{state.name}</h1>
        <p>Base price: {state.price} $</p>
        {state.discount && <p>Discount: {state.discount} %</p>}
      </div>
    </main>
  );
};
