import { gql, useQuery } from '@apollo/client';

export const GET_CUSTOMERS = gql`
  query MyQuery   {
    getCustomer {
      name
      value {
        email
        name
      }
    }
  }
`;


export const GET_ORDERS = gql`
  query MyQuery   {
    getOrders {
      name
      value {
        address
        carriers
        city
        createAt
        lat
        lng
        shippingCost
        trackingId
        trackingItems {
          customer_id
          customer {
            name
            email
          }
        }
      }
    }
  }
`;