import { View, Text, TouchableOpacity, TouchableHighlight } from 'react-native'
import React from 'react'
import useCustomerOrders from '../../hooks/useCustomerOrders'
import { useNavigation } from '@react-navigation/native'
import { homeCompositeTab } from '../navigator/type'
import { Card } from '@rneui/themed'
import { Icon } from '@rneui/base'


type Props = {
    userId: string,
    name: string,
    email: string
}


const CustomerCard = ({ name, userId, email }: Props) => {
    const { orders, loading, error } = useCustomerOrders(userId)
    const navigation = useNavigation<homeCompositeTab>()

    return (
        <TouchableOpacity>
            <Card containerStyle={{
                borderRadius: 15,
                paddingHorizontal: 13
            }}>
                <View className='flex flex-row justify-between mb-4'>
                    <View>
                        <Text className='text-xl font-bold'>{name}</Text>
                        <Text className='text-sm text-[#59c1cc]'>ID: {userId}</Text>
                    </View>
                    <View className='flex flex-row items-baseline'>
                        <Text>{loading ? "loading..." : `${orders?.length}x`}</Text>
                        <Icon type="entypo" name="box" size={50} color="#59c1cc" />
                    </View>
                </View>
                <Card.Divider className='mb-4' />

                <Text className='text-gray-700'>{email}</Text>
            </Card>
        </TouchableOpacity>
    )
}

export default CustomerCard