import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider, provider } from 'react-redux';
import { store } from './store';

export default function App() {
    return (
        <Provider store={store}>
            <View style={styles.container}>
                <Text>Let Dive into Uber Clone App!</Text>
                <StatusBar style="auto" />
            </View>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
