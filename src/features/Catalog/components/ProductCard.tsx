import { Image, StyleSheet, Text, View } from "react-native";
import { Product } from "../types";
import Button from "../../../shared/components/Button/Button";

const NUM_COLUMNS = 2;
const GAP = 12;

type ProductCardType = {
  item: Product,
  index: number,
}

const ProductCard = ({ item, index }: ProductCardType) => {
  const isFirstInRow = index % NUM_COLUMNS === 0;

  return (
    <View style={[
      styles.wrapper, 
      isFirstInRow ? { paddingRight: GAP / 2 } : { paddingLeft: GAP / 2 }
    ]}>
      <View style={styles.card}>
        <View>
          <Image
            source={{ uri: item.imageUrl }}
            style={styles.image}
            // width={100}
            // height={380}
          />
          {/* <Text>{item.imageUrl}</Text> */}
        </View>
        <View style={styles.container}>
          <Text>{item.name}</Text>
          <Text>*4.9</Text>
          <Text>{item.price}</Text>
          <Button title="В корзину" />
        </View>
      </View>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    maxWidth: '50%',
  },
  card: {
    // padding: 8,
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: 'white',
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  container: {
    padding: 12,
  }
});
