import { View, Text } from 'react-native'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

import React from 'react'
import Home from '../screens/Home';
import About from '../screens/About';
import ReviewDetails from '../screens/ReviewDetails';
import Header from '../shared/header';

export default function AboutStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#eee',
                },
                headerTintColor: '#444',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}>
            <Stack.Screen name="About" component={About} options={({ navigation, route }) => ({ headerTitle: () => <Header navigation={navigation} title="About GameZone" /> })} />
        </Stack.Navigator>
    )
}