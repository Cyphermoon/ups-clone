import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs"
import { CompositeNavigationProp } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"

export type RootStackParamList = {
    Main: undefined,
    MyModal: {userId: string, name: string},
    Order: {order: Order},
}

export type TabStackParamList = {
    Home: undefined,
    Orders: undefined,
}

export type homeCompositeTab = CompositeNavigationProp<
BottomTabNavigationProp<TabStackParamList, "Home">,
NativeStackNavigationProp<RootStackParamList>>

export type ModalCompositeProp = CompositeNavigationProp<
BottomTabNavigationProp<TabStackParamList>,
NativeStackNavigationProp<RootStackParamList, "MyModal">>

export type OrderScreenCompositeProp = CompositeNavigationProp<
BottomTabNavigationProp<TabStackParamList, "Orders">,
NativeStackNavigationProp<RootStackParamList>>