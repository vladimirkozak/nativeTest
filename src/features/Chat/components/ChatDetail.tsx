import { FlatList, Text, View } from "react-native";


export type Message = {
  id: string;
  chatId: string;
  text: string;
  senderId: string;
  createdAt: string;
  status: 'sent' | 'delivered' | 'read';
};

export const mockMessages: Message[] = [
  {
    id: '1',
    chatId: '1',
    text: 'Hey! How are you?',
    senderId: 'alex',
    createdAt: '20:58',
    status: 'read',
  },
  {
    id: '2',
    chatId: '1',
    text: "Hi! I'm good, thanks! How about you?",
    senderId: 'me',
    createdAt: '21:00',
    status: 'read',
  },
  {
    id: '3',
    chatId: '1',
    text: 'Great! Want to grab coffee somewhere tomorrow?',
    senderId: 'alex',
    createdAt: '21:03',
    status: 'read',
  },
  {
    id: '4',
    chatId: '1',
    text: 'Sounds good! ☕',
    senderId: 'me',
    createdAt: '21:12',
    status: 'delivered',
  },
];

const Message = ({ item }) => {
  return (
    <View>
      <Text>{item.text}</Text>
    </View>
  );
};

const ChatDetail = () => {
  return (
    <FlatList
      data={mockMessages}
      renderItem={({ item }) => <Message item={item} />}
      inverted
    />
  );
};

export default ChatDetail;
