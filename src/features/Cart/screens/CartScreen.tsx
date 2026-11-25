import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CartList from '../components/CartList';

function CartScreen() {
  return (
    <SafeAreaView>
      <CartList />
    </SafeAreaView>
  );
}

export default CartScreen;
