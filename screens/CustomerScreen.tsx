import { View, Text, SafeAreaView, Image, ScrollView} from 'react-native'
import {useNavigation, CompositeNavigationProp} from '@react-navigation/native';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import { TabStackParamList } from '../navigator/TabNavigator';
import { useTailwind } from 'tailwind-rn/dist'
import React, {useLayoutEffect} from 'react'

export type CustomerScreenNavigationProp = CompositeNavigationProp<
BottomTabNavigationProp<TabStackParamList, 'Customers'>
>


const CustomerScreen = () => {
  
    const tw = useTailwind();
    const navigation = useNavigation<CustomerScreenNavigationProp>()
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
  })
  }, [])
  return (
    <ScrollView>
             <Image 
      source={{uri: "https://links.papareact.com/3jc"}}
      style={tw("w-full h-64")}
      />
    </ScrollView>
      
  )
}

export default CustomerScreen