import { View, Text } from 'react-native'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

import React from 'react'
import Home from '../screens/Home';
import About from '../screens/About';
import ReviewDetails from '../screens/ReviewDetails';
import Header from '../shared/header';

export default function HomeStack() {
    return (
        <Stack.Navigator initialRouteName="Home"
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#eee',
                },
                headerTintColor: '#444',
                headerTitleStyle: {
                    // height: 60,
                    fontWeight: 'bold',
                },
            }}>
            <Stack.Screen name="Home" component={Home} options={({ navigation, route }) => ({ headerTitle: () => <Header navigation={navigation} title="GameZone" /> })} />
            <Stack.Screen name="ReviewDetails" component={ReviewDetails} options={{ title: "Review Details" }} />
            {/* <Stack.Screen name="About" component={About} options={{ title: "About Page" }} /> */}
        </Stack.Navigator>
    )
}