import { View, Text, TouchableOpacity, TouchableHighlight } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/themed'
import { useNavigation } from '@react-navigation/native'
import { OrderScreenCompositeProp } from '../navigator/type'

interface Props {
    order: Order
}

const OrderCard = ({ order }: Props) => {
    const navigation = useNavigation<OrderScreenCompositeProp>()
    return (
        <TouchableOpacity className='mb-5' onPress={() => navigation.navigate("Order", { order })}>
            <View className='bg-white rounded-lg flex flex-row justify-between mx-3 p-3'>
                <View className='space-y-2'>
                    <Icon type="material-community" color={"#EB6A7C"} name="truck-delivery" />
                    <Text className='text-[10px]'>{new Date(order.createdAt).toDateString()}</Text>
                </View>
                <View className='space-y-1'>
                    <Text className='text-xs text-gray-500'>{order.trackingItems.customer.email}</Text>
                    <Text className='text-base text-center'>{order.trackingItems.customer.name}</Text>
                </View>
                <View className='space-x-1 flex flex-row items-center'>
                    <Text className='text-xs text-gray-500'>{order.trackingItems.items.length}x</Text>
                    <Icon type='feather' name='box' />
                </View>
            </View>

        </TouchableOpacity>
    )
}

export default OrderCard