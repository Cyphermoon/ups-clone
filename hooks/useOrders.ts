import { useQuery } from "@apollo/client"
import { useEffect, useState } from "react";
import { GET_ORDERS } from "../graphql/queries"

export const useOrders = () => {
    const {data, loading, error} = useQuery(GET_ORDERS)
    const [orders, setOrders] = useState<Order[]>();


    useEffect(() => {
        if(loading) return
        const orders: Order[] = data.getOrders.map(({value}: OrderResponse) => {
            return {
              carrier: value.carrier,
              createdAt: value.createdAt,
              shippingCost: value.shippingCost,
              trackingId: value.trackingId ?? '', 
              address: value.address ?? '', 
              Lat: value.Lat ?? 0, 
              Lng: value.Lng ?? 0, 
              trackingItems: value.trackingItems ?? null, // 
            }
          })

          setOrders(orders)
          
    }, [])

    return {loading, error, orders}
}