import { ScrollView, Text } from 'react-native'
import React, { useState } from 'react'
import { Image, Input } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import { homeCompositeTab } from '../navigator/type'

const HomeScreen = () => {
    const navigation = useNavigation<homeCompositeTab>()
    const [input, setInput] = useState<string>()

    return (
        <ScrollView className="bg-[#59c1cc] px-0  grow">
            <Image
                className='w-full h-64'
                source={{
                    uri: "https://links.papareact.com/3jc"
                }} />
            <Input
                value={input}
                placeholder={"Search by customer"}
                className="bg-white"
                containerStyle={{
                    backgroundColor: "white",
                    paddingTop: 30,
                    paddingBottom: 0,
                    paddingLeft: 20,
                    paddingRight: 20
                }}

                onChangeText={setInput} />
        </ScrollView>
    )
}

export default HomeScreen