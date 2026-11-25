import { FlatList } from "react-native";
import CartCard from "./CartCard";
import { useCart } from "../hooks/useCart";

const CartList = () => {
  const { products } = useCart();

  return (
    <FlatList
      data={products}
      renderItem={({ item }) => <CartCard item={item} />}
    />
  );
};

export default CartList;
