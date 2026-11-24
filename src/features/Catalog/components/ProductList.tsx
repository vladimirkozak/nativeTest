import { FlatList, StyleSheet, View } from "react-native";
import ProductCard from "./ProductCard";
import { useProducts } from "../hooks/useProducts";

const NUM_COLUMNS = 2;

const ItemSeparatorComponent = () => {
  return <View style={styles.itemSeparator} />;
}

const ProductList = () => {
  const { products } = useProducts();

  return (
    <FlatList
      data={products}
      numColumns={NUM_COLUMNS}
      keyExtractor={(item) => item.id}
      renderItem={({ item, index }) => <ProductCard item={item} index={index} />}
      ItemSeparatorComponent={ItemSeparatorComponent}
    />
  );
};

export default ProductList;

const styles = StyleSheet.create({
  itemSeparator: {
    height: 12
  },
});
