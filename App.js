import { StatusBar } from 'expo-status-bar';
import { StyleSheet, KeybaordAvoidingView, Platform } from 'react-native';
import { Provider } from 'react-redux';
import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';
import EatsScreen from './screens/EatsScreen';
import { store } from './store';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function App() {
    const Stack = createStackNavigator();

    return (
        <Provider store={store}>
            <NavigationContainer>
                <SafeAreaProvider>
                    {/* <KeybaordAvoidingView
                        style={{ flex: 1 }}
                        behavior={Platform.OS = 'android' ? 'padding' : 'height'}
                        keyboardVerticalOffset={Platform.OS === 'ios' ? }    
                    > */}
                    <Stack.Navigator>
                        <Stack.Screen
                            name='HomeScreen'
                            component={HomeScreen}
                            options={{
                                headerShown: false,
                            }}
                        />
                        <Stack.Screen
                            name='MapScreen'
                            component={MapScreen}
                            options={{
                                headerShown: false,
                            }}
                        />
                        <Stack.Screen
                            name='EatsScreen'
                            component={EatsScreen}
                            options={{
                                headerShown: false,
                            }}
                        />
                    </Stack.Navigator>
                    {/* </KeybaordAvoidingView> */}
                </SafeAreaProvider>
            </NavigationContainer>
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
