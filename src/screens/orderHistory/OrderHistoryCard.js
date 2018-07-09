import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'

const { height, width } = Dimensions.get('window')

const OrderHistoryCard = ({content}) => {

    return (
        <TouchableOpacity style={styles.container}>
            <Image source={content.image} style={styles.image}/>
            <View style={styles.infoContainer}>
                <Text style={styles.title}>{content.title}</Text>
                <Text style={styles.location}>{content.location}</Text>
                <Text style={styles.date}>{content.date}</Text>
            </View>

            <View style={styles.subInfoContainer}>
                <Text style={styles.cost}>${content.cost}</Text>
                <Text style={styles.payment}>{content.payment}</Text>
            </View>
        </TouchableOpacity>
    )        
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 0.5,
        borderBottomColor: '#D6D6D6'
    },

    image: {
        width: 50,
        height: 32,
        borderRadius: 10,
        resizeMode: 'contain',
        marginLeft: 10
    },

    infoContainer: {
        padding: 10,
    },

    title: {
        fontSize: 13,
        fontFamily: 'Ubuntu-M'
    },

    location: {
        fontFamily: 'Ubuntu-R',
        fontSize: 10
    },

    date: {
        fontFamily: 'Ubuntu-M',
        fontSize: 11,
        color: '#959595'
    },

    subInfoContainer: {
        marginLeft: 'auto',
        marginRight: 10
    },

    cost: {
        fontFamily: 'Ubuntu-M',
        fontSize: 15
    },

    payment: {
        fontFamily: 'Ubuntu-M',
        fontSize: 11
    }

})

export default OrderHistoryCard