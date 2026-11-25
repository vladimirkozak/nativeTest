import { SafeAreaView } from "react-native-safe-area-context";
import OrderList from "../components/OrderList";

const OrdersScreen = () => {
  return (
    <SafeAreaView>
      <OrderList />
    </SafeAreaView>
  );
};

export default OrdersScreen;
