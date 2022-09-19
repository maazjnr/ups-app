import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { View, Text } from 'react-native'
import CustomerScreen from '../screens/CustomerScreen';
import OrdersScreen from '../screens/OrdersScreen';
import {useNavigation} from '@react-navigation/native';
import React, {useLayoutEffect} from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { Entypo } from '@expo/vector-icons';


export type TabStackParamList = {
    Customers: undefined;
    Orders: undefined;
}
const Tab = createBottomTabNavigator<TabStackParamList>();

const TabNavigator = () => {
const navigation = useNavigation();

useLayoutEffect(() => {
    navigation.setOptions({
        headerShown: false,
    })
}, [])

  return (
    <Tab.Navigator screenOptions={({route}) => ({
        tabBarActiveTintColor: "#59c1cc",
        tabBarInActiveTintColor: "gray",
        tabBarIcon: ({focused, color, size}) => {
            if(route.name === 'Customers') {
                return (
                    <Ionicons name='person' size={25}
                    color={focused ? "#59c1cc" : "gray"}
                    />
                );
                
            } else if(route.name === "Orders") {
                return (
                    <Entypo name="box" size={25}
                    color={focused ? "#eb6a7c" : "gray"} 
                    />
                )
            }
        }
    })}>
      <Tab.Screen name="Customers" component={CustomerScreen} />
      <Tab.Screen name="Orders" component={OrdersScreen} />
    </Tab.Navigator>
  )
}



export default TabNavigator