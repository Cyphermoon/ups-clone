import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { Card, Icon } from '@rneui/themed'
import MapView, { Marker } from 'react-native-maps'

interface props {
    order: Order
    color?: string
}

const DeliveryCard = ({ order, color = "#59c1cc" }: props) => {
    const textColor = "text-white"


    return (

        <View className='text-white flex-col justify-center mb-10'>
            <Card containerStyle={style.card}
            >
                <View className='mb-5 space-y-1'>
                    <Icon name="box" type='entypo' size={45} color={"#ffffff"} />
                    <Text className={`text-xs ${textColor} `} style={style.text}>UPS: {order.trackingId}</Text>
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
                style={style.map}
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
        backgroundColor: "#59c1cc",
        padding: 10,
        marginHorizontal: "auto",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    text: {
        textAlign: "center",
    },
    map: {
        width: "100%",
        height: 200
    }
})

export default DeliveryCard