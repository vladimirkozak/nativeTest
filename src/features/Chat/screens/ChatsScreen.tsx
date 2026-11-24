import ChatList from "../components/ChatsList";
import { SafeAreaView } from "react-native-safe-area-context";

const ChatsScreen = () => {
  return (
    <SafeAreaView>
      <ChatList />
    </SafeAreaView>
  );
};

export default ChatsScreen;
