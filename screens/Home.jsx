import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity, Modal, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { globalStyles } from '../styles/global'
import React, { useState } from 'react'
import Card from '../shared/card';
import { MaterialIcons } from '@expo/vector-icons';
import ReviewForm from './ReviewForm';

export default function Home({ navigation }) {
    const [modalOpen, setModalOpen] = useState(false)
    const [reviews, setReviews] = useState([
        { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1' },
        { title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum', key: '2' },
        { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3' },
    ]);
    function addReview(review) {
        review.key = Math.random().toString();
        setReviews([review, ...reviews])
        setModalOpen(false)
    }
    return (
        <View style={globalStyles.container}>

            <Modal visible={modalOpen} animationType="slide">
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.modalContent}>
                        <MaterialIcons name='close' size={24} style={{ ...styles.modalToggle, ...styles.modalClose }} onPress={() => setModalOpen(false)} />
                        <ReviewForm addReview={addReview} />
                        <Text>Hello</Text>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
            <MaterialIcons name='add' size={24} style={styles.modalToggle} onPress={() => setModalOpen(true)} />
            <FlatList data={reviews} renderItem={({ item }) => (
                <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', { item })}>
                    <Card>

                        <Text style={globalStyles.titleText}>{item.title}</Text>
                    </Card>
                </TouchableOpacity>
            )} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 24
    },
    titleText: {
        fontFamily: "nunito-bold",
        fontSize: 18,
    },
    modalToggle: {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: "#d0c9c9",
        padding: 10,
        borderRadius: 10,
        alignSelf: "center"
    },
    modalClose: {
        marginBottom: 0,
        marginTop: 20,
    },
    modalContent: {
        flex: 1,

    }

})