import { gql } from "@apollo/client";

export const GET_CUSTOMERS = gql`
query MyQuery {
  getCustomers {
    name
    value {
      email
      name
    }
  }
}
`

export const GET_ORDERS = gql`
    query MyQuery {
  getOrder {
    name
    value {
      Lat
      Lng
      address
      carrier
      createdAt
      shippingCost
      trackingId
      trackingItems {
        customer {
          email
          name
        }
        customer_id
        items {
          item_id
          name
          price
          quantity
        }
      }
    }
  }
}
`