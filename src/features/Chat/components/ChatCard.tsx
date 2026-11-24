import { useNavigation } from "@react-navigation/native";
import { Pressable, StyleSheet, Text } from "react-native";

const ChatCard = ({ item }) => {
  const navigation = useNavigation();

  const onPressHandler = (id) => {
    console.log(id);
    navigation.navigate('chatDetailScreen');
  }

  return (
    <Pressable style={styles.card} onPress={() => onPressHandler(item.id)}>
      <Text>{item.name}</Text>
      <Text>{item.lastMessage}</Text>
    </Pressable>
  );
};

export default ChatCard;

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    padding: 8,
  }
});
