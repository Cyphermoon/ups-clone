import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { Card, Icon } from '@rneui/themed'
import MapView, { Marker } from 'react-native-maps'

interface props {
    order: Order
    color?: string
    fullWidth?: boolean
}

const DeliveryCard = ({ order, color = "#59c1cc", fullWidth }: props) => {
    const textColor = "text-white"

    return (

        <View className={`text-white flex-col ${fullWidth && "h-screen"} justify-center grow ${!fullWidth && "mb-10"} -mt-4`}>
            <Card containerStyle={[style.card,
            {
                backgroundColor: color,
                borderTopLeftRadius: fullWidth ? 0 : 10,
                borderTopRightRadius: fullWidth ? 0 : 10,

            }]}
            >
                <View className='mb-5 space-y-1'>
                    <Icon name="box" type='entypo' size={45} color={"#ffffff"} />
                    <Text className={`text-xs ${textColor} `} style={style.text}>{order.carrier}: - {order.trackingId}</Text>
                    <Text className={`text-lg font-medium ${textColor}`} style={style.text}>Expected Delivery: {order?.createdAt.toString()}</Text>
                </View>
                <View className='mb-5 space-y-1'>
                    <Text className={`${textColor} text-md font-normal`} style={style.text}>Address</Text>
                    <Text className={`${textColor} text-xs font-light`} style={style.text}>{order.Address} {order.City}</Text>
                    <Text className={`${textColor} text-xs font-light`} style={style.text}>ShippingCost: ${order.shippingCost}</Text>
                </View>
                <Card.Divider color='white' />


                <View className='space-y-1'>
                    {order.trackingItems.items.map((item) => {
                        return (
                            <View className='text-white flex flex-row justify-between'>
                                <Text className={`${textColor} italic font-semibold`}>{item.name}</Text>
                                <Text className={`${textColor} italic font-semibold`}>x{item.quantity}</Text>
                            </View>
                        )
                    })}
                </View>

            </Card>

            <MapView
                style={[style.map, { flexGrow: 1, height: fullWidth ? 0 : 200 }]}
                initialRegion={{
                    latitude: order.Lat,
                    longitude: order.Lng,
                    latitudeDelta: 0.005,
                    longitudeDelta: 0.005
                }} >
                {order.Lat && order.Lng && <Marker
                    title="Delivery Location"
                    identifier='destination'
                    description={order.Address}
                    coordinate={{ latitude: order.Lat, longitude: order.Lng }} />}

            </MapView>

        </View>
    )
}

const style = StyleSheet.create({
    card: {
        width: "100%",
        padding: 10,
        marginHorizontal: "auto",
        borderWidth: 0,
    },
    text: {
        textAlign: "center",
    },
    map: {
        width: "100%",
    }
})

export default DeliveryCard