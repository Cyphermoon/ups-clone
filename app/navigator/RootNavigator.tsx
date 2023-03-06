import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import TabNavigator from './TabNavigator';
import { RootStackParamList } from './type';
import ModalScreen from '../screens/ModalScreen';
import OrderScreen from '../screens/OrderScreen';

const RootStack = createNativeStackNavigator<RootStackParamList>()

const RootNavigator = () => {
    return (
        <RootStack.Navigator>
            <RootStack.Group>
                <RootStack.Screen
                    name='Main'
                    options={{ headerShown: false }}
                    component={TabNavigator} />
            </RootStack.Group>

            <RootStack.Group
                screenOptions={{
                    presentation: "modal"
                }}>

                <RootStack.Screen
                    options={{ headerShown: false }}
                    name="MyModal"
                    component={ModalScreen} />

            </RootStack.Group>

            <RootStack.Group>

                <RootStack.Screen
                    options={({ route }) => {
                        return {
                            headerShown: true,
                            headerTitle: route.params.order.trackingItems.customer.name,
                            headerBackTitle: "Deliveries",
                            headerTitleStyle: { color: "black " }
                        }
                    }}
                    name="Order"
                    component={OrderScreen} />

            </RootStack.Group>

        </RootStack.Navigator>
    )
}

export default RootNavigator