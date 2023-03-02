import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs"
import { CompositeNavigationProp } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"

export type RootStackParamList = {
    Main: undefined,
    MyModal: {userId: string, name: string},
    Order: any
}

export type TabStackParamList = {
    Home: undefined,
    Orders: undefined,
}

export type homeCompositeTab = CompositeNavigationProp<
BottomTabNavigationProp<TabStackParamList, "Home">,
NativeStackNavigationProp<RootStackParamList>>