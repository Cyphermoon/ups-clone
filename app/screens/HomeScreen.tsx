import { ScrollView, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Image, Input } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import { homeCompositeTab } from '../navigator/type'
import { useQuery } from '@apollo/client'
import { GET_CUSTOMERS } from '../../graphql/queries'

const HomeScreen = () => {
    const navigation = useNavigation<homeCompositeTab>()
    const [input, setInput] = useState<string>()
    const { loading, data, error } = useQuery(GET_CUSTOMERS)

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

            {!loading ? data?.getCustomers.map(({ name: ID, value: { name, email } }: CustomerResponse) => {
                return <Text>{email} -{name}</Text>
            }) : <Text>Loading</Text>}
        </ScrollView>
    )
}

export default HomeScreen