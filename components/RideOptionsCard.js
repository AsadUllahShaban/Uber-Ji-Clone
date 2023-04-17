import { FlatList, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'tailwind-react-native-classnames'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

const data = [
    {
        id: 'Uber-X-123',
        title: 'UberX',
        multiplier: 1,
        image: require('../assets/UberMini.png'),
    },
    {
        id: 'Uber-XL-456',
        title: 'Uber XL',
        multiplier: 1.2,
        image: require('../assets/UberXL.png'),
    },
    {
        id: 'Uber-LUX-789',
        title: 'Uber LUX',
        multiplier: 1.75,
        image: require('../assets/UberLUX.png'),
    }
]

const RideOptionsCard = ({ navigation }) => {
    const [selected, setSelected] = useState(null);
    return (
        <SafeAreaView style={tw`bg-white flex-grow`} >
            <View>
                <TouchableOpacity
                    onPress={() => navigation.navigate('NavigateCard')}
                    style={tw`absolute top-3 left-5 z-50 p-3 rounded-full`}
                >
                    <Icon name='chevron-left' type='fontawesome' />
                </TouchableOpacity>
                <Text style={tw`text-center py-5 text-xl`}>Select a Ride</Text>
            </View>

            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item: { id, title, multiplier, image }, item }) => (
                    <TouchableOpacity
                        onPress={() => setSelected(item)}
                        style={tw`flex-row justify-between items-center px-10 ${id === selected?.id && 'bg-gray-200'}`}>
                        <Image
                            style={{
                                width: 100,
                                height: 80,
                                resizeMode: 'contain',
                            }}
                            source={image}
                        />
                        <View style={tw`-ml-6`}>
                            <Text style={tw`text-xl font-semibold`}>{title}</Text>
                            <Text>Travel Time</Text>
                        </View>

                        <Text style={tw`text-xl`} >$50</Text>
                    </TouchableOpacity>

                )}
            />

            <View>
                <TouchableOpacity
                    disabled={!selected}
                    style={tw`bg-black m-3 py-1 ${!selected && 'bg-gray-300'} `}>
                    <Text style={tw`text-center text-xl text-white`}>Choose {selected?.title}</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}

export default RideOptionsCard

const styles = StyleSheet.create({})