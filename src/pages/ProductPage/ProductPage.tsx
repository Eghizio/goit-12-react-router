import { useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { ProductCard } from "../../components/ProductCard";

export const ProductPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const { from, discount } = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  );

  useEffect(() => {
    // API call to check if the referer really can provide a discount
  }, [from]);

  // const from = searchParams.get("from");
  // const discount = searchParams.get("discount");
  const price = 13.37;

  console.log({ searchParams });

  const applyDiscount = () =>
    setSearchParams((prev) => {
      prev.append("discount", "20");
      return prev;
    });

  const clearDiscount = () =>
    setSearchParams((prev) => {
      prev.delete("discount");
      return prev;
    });

  return (
    <main>
      <h1>
        Referal from {from}: {discount ? discount : "0"}% OFF
      </h1>

      <ProductCard name="Amazing product" price={price} discount={discount} />

      <button onClick={applyDiscount}>APPLY 20% OFF!</button>
      <button onClick={clearDiscount}>CLEAR DISCOUNT!</button>
    </main>
  );
};
