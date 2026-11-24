
export type Chat = {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  lastMessageTime: string;
  unreadCount: number;
  isOnline: boolean;
  isGroup: boolean;
  isRead: boolean;
};

export const mockChats: Chat[] = [
  {
    id: '1',
    name: 'Alex Johnson',
    avatar: 'https://i.pravatar.cc/150?img=12',
    lastMessage: 'Sounds good! 👍',
    lastMessageTime: '21:12',
    unreadCount: 2,
    isOnline: true,
    isGroup: false,
    isRead: false,
  },
  {
    id: '2',
    name: 'Frontend Team',
    avatar: 'https://i.pravatar.cc/150?img=50',
    lastMessage: 'Anna: Let’s discuss the new project',
    lastMessageTime: '20:45',
    unreadCount: 1,
    isOnline: false,
    isGroup: true,
    isRead: false,
  },
  {
    id: '3',
    name: 'Maria Garcia',
    avatar: 'https://i.pravatar.cc/150?img=47',
    lastMessage: 'See you tomorrow!',
    lastMessageTime: '19:20',
    unreadCount: 0,
    isOnline: true,
    isGroup: false,
    isRead: true,
  },
  {
    id: '4',
    name: 'Study Group',
    avatar: 'https://i.pravatar.cc/150?img=60',
    lastMessage: 'You: Great!',
    lastMessageTime: '18:33',
    unreadCount: 0,
    isOnline: false,
    isGroup: true,
    isRead: true,
  },
  {
    id: '5',
    name: 'David Kim',
    avatar: 'https://i.pravatar.cc/150?img=11',
    lastMessage: 'Okay, got it',
    lastMessageTime: '16:17',
    unreadCount: 0,
    isOnline: false,
    isGroup: false,
    isRead: true,
  },
  {
    id: '6',
    name: 'Travel Buddies',
    avatar: 'https://i.pravatar.cc/150?img=32',
    lastMessage: 'Nice photo!',
    lastMessageTime: '14:50',
    unreadCount: 0,
    isOnline: false,
    isGroup: true,
    isRead: true,
  },
  {
    id: '7',
    name: 'Olivia Brown',
    avatar: 'https://i.pravatar.cc/150?img=44',
    lastMessage: 'Thanks! ❤️',
    lastMessageTime: '12:35',
    unreadCount: 0,
    isOnline: true,
    isGroup: false,
    isRead: true,
  },
  {
    id: '8',
    name: 'Michael Wilson',
    avatar: 'https://i.pravatar.cc/150?img=13',
    lastMessage: 'Are we still meeting today?',
    lastMessageTime: 'Yesterday',
    unreadCount: 0,
    isOnline: false,
    isGroup: false,
    isRead: true,
  },
];
