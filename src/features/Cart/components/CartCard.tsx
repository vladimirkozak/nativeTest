import { Text, View } from "react-native";

const CartCard = ({ item }) => {
  return (
    <View>
      <Text>{item?.product.name}</Text>
    </View>
  );
};

export default CartCard;
