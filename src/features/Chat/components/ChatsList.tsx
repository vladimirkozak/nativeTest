import { FlatList } from "react-native";
import ChatCard from "./ChatCard";
import { mockChats } from "./test";

const ChatList = () => {
  return (
    <FlatList
      data={mockChats}
      keyExtractor={(item) => item.id}
      renderItem={({ item} ) => <ChatCard item={item} />}
    />
  );
};

export default ChatList;
