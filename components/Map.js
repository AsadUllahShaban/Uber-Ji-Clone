import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MapView, { Marker } from 'react-native-maps';
import tw from 'tailwind-react-native-classnames';
import { useSelector } from 'react-redux';
import { selectOrigin } from '../slices/navSlice'

const Map = () => {

    const origin = useSelector(selectOrigin);

    return (
        <MapView
            style={tw`flex-1`}
            mapType='mutedStandard'
            initialRegion={{
                // latitude: 37.78825,Dummy Value-Sanfrancisco
                latitude: origin.location.lat,
                // longitude: -122.4324,Dummy Value-Sanfrancisco
                longitude: origin.location.lng,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
            }}
        />
    )
}

export default Map

const styles = StyleSheet.create({})