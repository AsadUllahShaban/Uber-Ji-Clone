import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const EatsScreen = () => {
    return (
        <View style={styles.container}>
            <Text>EatsScreen</Text>
        </View>
    )
}

export default EatsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})