import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'

const { height, width } = Dimensions.get('window')

const SuggestionCard = ({content}) => {

    return (
        <View style={styles.container}>
            <Image source={content.image} style={styles.image}/>
            <Text style={styles.title}>{content.title}</Text>
            <Text style={styles.category}>{content.category}</Text>
            <Text style={styles.location}>{content.location}</Text>
            <TouchableOpacity>
                <Text style={styles.openText}>Open now</Text>
            </TouchableOpacity>
        </View>
    )        
}

const styles = StyleSheet.create({
    container: {
        height: 250,
        borderRadius: 10,
        backgroundColor: 'white',
        marginLeft: 20
    },

    image: {
        width: 200,
        height: 120,
        borderRadius: 10,
        resizeMode: 'cover',
        margin: 15
    },

    title: {
        width: 200,
        fontSize: 18,
        fontFamily: 'Ubuntu-R',
        paddingLeft: 15,
        paddingRight: 15
    },
     
    category: {
        width: 200,
        color: '#8D8D8D',
        fontFamily: 'Ubuntu-R',
        fontSize: 12,
        paddingLeft: 15,
        paddingRight: 15,
        marginTop: 5
    },

    location: {
        width: 200,
        color: '#8D8D8D',
        fontFamily: 'Ubuntu-R',
        fontSize: 12,
        paddingLeft: 15,
        paddingRight: 15,
        marginTop: 5,
    },

    openText: {
        color: '#31C830',
        fontFamily: 'Ubuntu-R',
        fontSize: 12,
        paddingLeft: 15,
        paddingRight: 15,
        marginTop: 15,
    }
})

export default SuggestionCard