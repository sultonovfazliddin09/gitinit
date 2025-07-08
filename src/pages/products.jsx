import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/products/cardProduct";
import { useEffect } from "react";
import { setProducts } from "../createSlice";

export default function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.allProducts);

  useEffect(() => {
    const getProduct = async () => {
      const response = await fetch("http://localhost:3000/products");
      const data = await response.json();
      dispatch(setProducts(data));
    };
    getProduct();
  }, [dispatch]);

  return (
    <div className="max-w-7xl m-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {products.length === 0
        ? "Loading..."
        : products.map((product) => (
            <ProductCard key={product.id} p={product} />
          ))}
    </div>
  );
}
