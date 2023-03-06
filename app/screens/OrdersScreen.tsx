import { View, Text, ScrollView, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { OrderScreenCompositeProp } from '../navigator/type'
import { Button } from '@rneui/themed'
import useOrders from '../../hooks/useOrders'
import { GET_ORDERS } from '../../graphql/queries'
import OrderCard from '../components/OrderCard'
import { Image } from 'react-native-elements'

const OrdersScreen = () => {
    const navigation = useNavigation<OrderScreenCompositeProp>()
    const [ascending, setAscending] = useState(false);
    const { orders, loading, error } = useOrders()

    return (
        <ScrollView className='bg-[#EB6A7C]'>
            <Image className='w-full h-60' source={{
                uri: "https://links.papareact.com/m51",
                width: 200,
                height: 100
            }} />
            <Button
                containerStyle={{
                    paddingHorizontal: 15,
                    borderRadius: 10
                }}
                color="pink"
                titleStyle={{ color: "gray", fontWeight: "400" }}
                onPress={() => setAscending(!ascending)} >
                {ascending ? "Showing: Oldest First" : "Showing: Recent First"}
            </Button>

            <View className='mt-6 space-x-10'>
                {orders?.sort((a, b) => {
                    if (ascending) {
                        return new Date(a.createdAt) > new Date(b.createdAt) ? 1 : -1
                    }
                    else if (!ascending) {
                        return new Date(a.createdAt) > new Date(b.createdAt) ? -1 : 1
                    }

                    return 0
                }).map((order, idx) => {
                    return <OrderCard key={idx} order={order} />
                })}
            </View>

        </ScrollView>
    )
}

export default OrdersScreen