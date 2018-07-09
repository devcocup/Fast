import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'

const { height, width } = Dimensions.get('window')

const RewardHistoryCard = ({content}) => {

    return (
        <TouchableOpacity style={styles.container}>
            <Image source={content.profile} style={styles.image}/>
            <View style={styles.infoContainer}>
                <Image source={content.rating} style={styles.rateImage}/>
                <Text style={styles.message}>{content.message}</Text>
            </View>
        </TouchableOpacity>
    )        
}

const styles = StyleSheet.create({
    container: {
        height: 80,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 20,
        backgroundColor: 'rgba(119, 184, 234, 0.46)'
    },

    image: {
        width: 35,
        height: 35,
        borderRadius: 10,
        resizeMode: 'contain',
        marginLeft: 5,
    },

    infoContainer: {
        padding: 10,
    },

    rateImage: {
        resizeMode: 'contain'
    },

    message: {
        fontFamily: 'Ubuntu-M',
        fontSize: 12,
        marginTop: 10
    }
})

export default RewardHistoryCard