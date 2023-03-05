import { View, Text, TouchableOpacity, StyleSheet, FlatList, ScrollView } from 'react-native'
import React from 'react'
import { Card } from '@rneui/themed'
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native'
import { ModalCompositeProp, RootStackParamList } from '../navigator/type'
import { Icon } from 'react-native-elements'
import useCustomerOrder from '../../hooks/useCustomerOrders'
import DeliveryCard from '../components/DeliveryCard'
import { SafeAreaView } from 'react-native-safe-area-context'

type ModalScreenRouteProp = RouteProp<RootStackParamList, "MyModal">

const ModalScreen = () => {
    const navigation = useNavigation<ModalCompositeProp>()
    const { params: { name, userId }, ...route } = useRoute<ModalScreenRouteProp>()

    const { loading, orders, error } = useCustomerOrder(userId)

    return (
        <SafeAreaView className='p-1 mb-20'>
            <View className='flex flex-row justify-between border-b p-4 border-gray-400'>
                <View className='mx-auto'>
                    <Text className='text-[#59c1cc] text-xl mb-2 text-center'>{name}</Text>
                    <Text className='text-center text-gray-700 text-sm'>Deliveries</Text>
                </View>
                <TouchableOpacity onPress={navigation.goBack}>
                    <Icon type='antdesign' size={30} name='closecircle' />
                </TouchableOpacity>
            </View>
            <FlatList
                data={orders}
                keyExtractor={(item: Order, idx) => `order-${item.trackingId}-${idx}`}
                renderItem={({ item: order }) => <DeliveryCard order={order} />} />
        </SafeAreaView>
    )
}


export default ModalScreen