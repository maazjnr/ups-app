import { View, Text, SafeAreaView, Image, ScrollView, TextInput} from 'react-native'
import {useNavigation, CompositeNavigationProp} from '@react-navigation/native';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import { TabStackParamList } from '../navigator/TabNavigator';
import { useTailwind } from 'tailwind-rn/dist'
import React, {useLayoutEffect, useState} from 'react'
import { useQuery } from '@apollo/client';
import { GET_CUSTOMERS } from '../graphql/query';
import CustomerCard from '../components/CustomerCard';
import {NativeStackNavigationProp} from '@react-navigation/native-stack'
import { RootStackParamList } from '../navigator/RootNavigator';

export type CustomerScreenNavigationProp = CompositeNavigationProp<
BottomTabNavigationProp<TabStackParamList, 'Customers'>,
NativeStackNavigationProp<RootStackParamList>
>

const CustomerScreen = () => {
  
    const tw = useTailwind();
    const navigation = useNavigation<CustomerScreenNavigationProp>()

    const [input, setInput] = useState<string>("")
    const {loading, error, data} = useQuery(GET_CUSTOMERS);


  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
  })
  }, [])
  return (
    <ScrollView style={{backgroundColor: "#59c1cc"}}>
      <Image 
      source={{uri: "https://links.papareact.com/3jc"}}
      style={tw("w-full h-64")}
      />
      <TextInput placeholder='Search by Customer'
      value={input} onChangeText={setInput}
      style={tw("bg-white pt-5 pb-5 px-10")}
      />

    {data?.getCustomer.map(({name: ID, value: {email, name}}: CustomerResponse) => (
      <CustomerCard key={ID} email={email} name={name} userId={ID} />
      ))}


    </ScrollView>
      
  )
}

export default CustomerScreen