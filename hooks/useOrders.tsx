import { View, Text } from 'react-native';
import React, {useState, useEffect} from 'react';
import { useQuery } from '@apollo/client';
import { GET_ORDERS } from '../graphql/query';


const userOrders = () => {

    const {loading, error, data} = useQuery(GET_ORDERS)
    const [orders, setOrders] = useState<Order[]>([]);

    useEffect(() => {
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

        setOrders(orders);
    }, [data])
    

  return {loading, error, orders }
}

export default userOrders