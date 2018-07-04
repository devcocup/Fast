import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native'

const { height, width } = Dimensions.get('window')

const QuickStartCard = ({content}) => {

    return (
        <View style={[styles.container, {backgroundColor: content.color}]}>
            <View style={styles.headerContainer}>
                <Image source={content.image} style={styles.image}/>
                <Text style={styles.logoText}>{content.logoText}</Text>
            </View>
            <Text style={styles.title}>{content.title}</Text>
            <Text style={styles.description}>{content.description}</Text>
        </View>
    )        
}

const styles = StyleSheet.create({
    container: {
        height: height * 0.6,
        alignItems: 'center',
        borderRadius: 20,
        marginTop: 30
    },

    headerContainer: {
        flexDirection: 'row'
    },

    image: {
        height: width * 0.4,
        resizeMode: 'contain',
        marginTop: '15%'
    },

    logoText: {
        fontFamily: 'Dreamscape',
        fontSize: 45,
        color: 'white',
        height: width * 0.4,
        marginLeft: 5,
        textAlignVertical: 'bottom'
    },

    title: {
        color: 'white',
        fontSize: 30,
        fontFamily: 'Ubuntu-R',
        marginTop: '15%'
    },
     
    description: {
        width: width * 0.55,
        color: 'rgba(255, 255, 255, 0.7)',
        fontFamily: 'Gibson',
        fontSize: 15,
        textAlign: 'center',
        marginTop: 10,
        marginBottom: '25%'
    }
})

export default QuickStartCard