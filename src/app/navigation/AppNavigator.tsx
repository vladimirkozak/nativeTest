import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../../features/Catalog/screens/HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CartScreen from '../../features/Cart/screens/CartScreen';
import ChatsScreen from '../../features/Chat/screens/ChatsScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChatDetailScreen from '../../features/Chat/screens/ChatDetailScreen';
import ProfileScreen from '../../features/Profile/screens/ProfileScreen';
import RegisterScreen from '../../features/auth/screens/RegisterScreen';
import LoginScreen from '../../features/auth/screens/LoginScreen';
import { useAuth } from '../../features/auth/context/AuthContext';
import OrdersScreen from '../../features/orders/screens/OrdersScreen';

const Tab = createBottomTabNavigator();
const RootStack = createNativeStackNavigator();

const MainTabs = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Catalog" component={HomeScreen} options={{ title: 'Catalog' }} />
      <Tab.Screen name="Cart" component={CartScreen} options={{ title: 'Cart' }} />
      {isLoggedIn ? (
        <>
          <Tab.Screen name="Chats" component={ChatsScreen} options={{ title: 'Chats' }} />
          <Tab.Screen name="Orders" component={OrdersScreen} options={{ title: 'Orders' }} />
        </>
      )  : null}
      <Tab.Screen name="Profile" component={ProfileScreen} options={{ title: 'Profile' }} />
    </Tab.Navigator>
  )
}

export default function AppNavigator() {
  const { isLoggedIn } = useAuth();

  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen name='mainTabs' component={MainTabs} />

        {isLoggedIn ? (
          <RootStack.Screen name='chatDetailScreen' component={ChatDetailScreen} />
        ) : (
          <>
            <RootStack.Screen name='registerScreen' component={RegisterScreen} />
          </>
        )}
        <RootStack.Screen name='loginScreen' component={LoginScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
