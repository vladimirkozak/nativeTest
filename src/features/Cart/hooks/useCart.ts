import { useEffect, useState } from "react";
import { Product } from "../../Catalog/types";
import { cartApi } from "../api/cartApi";

export const useCart = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const load = async () => {
    const data = await cartApi.getProducts();
    setProducts(data);
  };

  useEffect(() => {
    load();
  }, []);

  return {
    products,
  }
};
