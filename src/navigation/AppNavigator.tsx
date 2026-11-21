import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CartScreen from '../screens/CartScreen/CartScreen';

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Catalog" component={HomeScreen} options={{ title: 'Catalog' }} />
        <Tab.Screen name="Cart" component={CartScreen} options={{ title: 'Cart' }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
