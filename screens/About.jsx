import { View, Text, StyleSheet, Button } from 'react-native'
import { globalStyles } from '../styles/global'

import React from 'react'

export default function About({ navigation }) {
    return (
        <View style={globalStyles.container}>
            <Text>About</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 24
    }
})