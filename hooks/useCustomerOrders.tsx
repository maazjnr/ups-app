import { View, Text } from 'react-native'
import React, {useState, useEffect} from 'react'
import { useQuery } from '@apollo/client';
import { GET_ORDERS } from '../graphql/query';


const useCustomerOrders = (userId: string) => {

  const {loading, error, data} = useQuery(GET_ORDERS);
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    if(!data) return;
            if(!data) return;
        const orders:  Order[] = data.getOrders.map(({value}: OrderResponse) => ({
            carrier: value.carriers,
            createAt: value.createAt,
            shippingCost: value.shippingCost,
            trackingId: value.trackingId,
            trackingItems: value.trackingItems,
            Address: value.createAt,
            City: value.City,
            Lat: value.Lat,
            Lng: value.Lng
        }));

        const customerOrders = orders.filter(order => 
          order.trackingItems.customer_id === userId);
        
        setOrders(customerOrders)

  }, [data, userId])

  return {loading, error, orders};
}

export default useCustomerOrders