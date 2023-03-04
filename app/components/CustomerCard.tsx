import { View, Text } from 'react-native'
import React from 'react'
import useCustomerOrders from '../../hooks/useCustomerOrders'
import { useNavigation } from '@react-navigation/native'


type Props = {
    userId: string,
    name: string,
    email: string
}

const CustomerCard = ({ name, userId, email }: Props) => {
    const { orders, loading, error } = useCustomerOrders(userId)
    const navigation = useNavigation()
    return (
        <View>
            <Text>CustomerCard</Text>
        </View>
    )
}

export default CustomerCard