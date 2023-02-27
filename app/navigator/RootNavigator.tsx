import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import TabNavigator from './TabNavigator';

const RootStack = createNativeStackNavigator()

const RootNavigator = () => {
    return (
        <RootStack.Navigator>
            <RootStack.Group>
                <RootStack.Screen name='Main' component={TabNavigator} />
            </RootStack.Group>

        </RootStack.Navigator>
    )
}

export default RootNavigator