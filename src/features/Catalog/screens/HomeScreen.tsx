import { SafeAreaView } from 'react-native-safe-area-context';
import ProductList from '../components/ProductList';
import Container from '../../../shared/components/Container/Container';

function HomeScreen() {

  return (
    <SafeAreaView>
      <Container>
        <ProductList />
      </Container>
    </SafeAreaView>
  );
}

export default HomeScreen;
