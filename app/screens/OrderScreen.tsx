import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import DeliveryCard from '../components/DeliveryCard'
import { RouteProp, useRoute } from '@react-navigation/native'
import { RootStackParamList } from '../navigator/type'

type OrderScreenRouteProp = RouteProp<RootStackParamList, "Order">

const OrderScreen = () => {
    const route = useRoute<OrderScreenRouteProp>()
    const { order } = route.params
    return (
        <ScrollView>
            <DeliveryCard order={order} color={"#EB6A7C"} fullWidth />
        </ScrollView>

    )
}

export default OrderScreen