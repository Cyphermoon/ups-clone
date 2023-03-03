import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import OrderScreen from '../screens/OrderScreen';
import { TabStackParamList } from './type';
import { Icon } from 'react-native-elements';


const Tab = createBottomTabNavigator<TabStackParamList>()

const TabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarActiveTintColor: "#59c1cc",
            tabBarInactiveTintColor: "gray",
            tabBarIcon: ({ focused }) => {
                if (route.name === "Home") {
                    return <Icon name='users' type='entypo' color={focused ? "#59c1cc" : "gray"} />
                }
                else if (route.name === "Orders") {
                    return <Icon name='box' type='entypo' color={focused ? "#eb6a7c" : "gray"} />
                }

                return null
            }
        })}>
            <Tab.Screen name='Home' component={HomeScreen} options={{ headerShown: false }} />
            <Tab.Screen name='Orders' component={OrderScreen} />
        </Tab.Navigator>
    )
}

export default TabNavigator