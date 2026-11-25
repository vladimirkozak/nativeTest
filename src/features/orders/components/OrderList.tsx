import { FlatList } from "react-native";
import OrderCard from "./OrderCard";
import { useOrders } from "../hooks/useOrders";

const OrderList = () => {
  const { orders } = useOrders();

  console.log(orders);

  return (
    <FlatList
      data={[1, 2, 3]}
      renderItem={() => <OrderCard />}
    />
  );
};

export default OrderList;
