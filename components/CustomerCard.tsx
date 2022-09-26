import { View, Text, TouchableOpacity, TouchableHighlight } from 'react-native'
import React from 'react'
import useCustomerOrders from '../hooks/useCustomerOrders';
import { useTailwind } from 'tailwind-rn/dist';
import { useNavigation } from '@react-navigation/native';
import { CustomerScreenNavigationProp } from '../screens/CustomerScreen';
import {Card } from 'react-native-paper';

type Props = {
  userId: string;
  name: string;
  email: string
}

const CustomerCard = ({email, name, userId}: Props) => {
  const {loading, error, orders} = useCustomerOrders(userId);
  const tw = useTailwind();
  const navigation = useNavigation<CustomerScreenNavigationProp>()

  return (
    <TouchableOpacity >
      <Card style={tw('p-5  ml-2 mr-2 mb-2 mt-2')}>
        <View >
          <View>
            <Text>{name}</Text>
            <Text>ID {userId}</Text>
          </View>
        </View>
      </Card>
    </TouchableOpacity>
  )
}


export default CustomerCard