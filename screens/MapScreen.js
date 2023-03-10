import React from 'react';
import { View, Text } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import Map from '../components/Map';
import { createStackNavigator } from '@react-navigation/stack';
import MapView from 'react-native-maps';

const MapScreen = () => {
    const Stack = createStackNavigator();

    return (
        <View>
            <View style={tw`h-1/2`}>
                <Map />
            </View>
            <View style={tw`h-1/2`}>
            </View>
        </View>
    );
};

export default MapScreen;