import { View, Text, StyleSheet, Button, Image } from 'react-native'
import React from 'react'
import { globalStyles, images } from '../styles/global'
import Card from '../shared/card';


export default function ReviewDetails({ route, navigation }) {
    const { item } = route.params;
    return (
        <View style={globalStyles.container}>
            <Card>
                <Text>{item.title}</Text>
                <Text>{item.body}</Text>
                <View style={styles.rating}>
                    <Text>GameZone Rating:</Text>
                    <Image source={images.ratings[item.rating]} />

                </View >
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    rating: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 16,
        marginTop: 16,
        borderTopWidth: 1,
        borderTopColor: '#eee',
    }
});