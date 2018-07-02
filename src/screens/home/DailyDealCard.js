import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native'

const { width } = Dimensions.get('window')

const DailyDealCard = ({content}) => {

    return (
        <View style={styles.container}>
            <Image source={content.image} style={styles.image}/>
            <Text style={styles.title}>{content.title}</Text>
            <Text style={styles.description}>{content.description}</Text>
        </View>
    )        
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2590B9',
        alignItems: 'center',
        borderRadius: 20,
        marginTop: 30
    },

    image: {
        width: width * 0.5,
        height: width * 0.5,
        resizeMode: 'contain',
        marginTop: '25%'
    },

    title: {
        color: 'white',
        fontSize: 30,
        marginTop: '15%'
    },
     
    description: {
        width: width * 0.5,
        color: 'rgba(255, 255, 255, 0.46)',
        fontSize: 15,
        textAlign: 'center',
        marginTop: 10,
        marginBottom: '20%'
    }
})

export default DailyDealCard