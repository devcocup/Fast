import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'

const { height, width } = Dimensions.get('window')

const FoodBloggerDetailCard = ({content}) => {

    return (
        <View style={styles.container}>
            <View style={{padding: 15, alignItems: 'center'}}>
                <Image source={content.image} style={styles.image}/>
                <Text style={styles.timeText}>Close at {content.time}</Text>
                <TouchableOpacity>
                    <Text style={styles.openText}>Open now</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.title}>{content.title}</Text>
                <Text style={styles.location}>{content.location}</Text>
                <Text style={styles.category}>{content.category}</Text>
                <Text style={styles.distance}>{content.distance}</Text>
            </View>
        </View>
    )        
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#F9F9F9',
        borderRadius: 10,
        marginTop: 10,
    },

    image: {
        width: 100,
        height: 60,
        borderRadius: 10,
        resizeMode: 'cover',
    },

    timeText: {
        marginTop: 5,
        marginBottom: 10,
        fontFamily: 'Ubuntu-LI',
        fontSize: 8
    },

    infoContainer: {
        marginLeft: 10,
        marginRight: 20,
        marginTop: 15
    },

    title: {
        fontSize: 15,
        fontFamily: 'Ubuntu-B',
        marginBottom: 10
    },
     
    category: {
        color: '#8D8D8D',
        fontFamily: 'Ubuntu-R',
        fontSize: 10,
        marginTop: 5
    },

    location: {
        color: '#8D8D8D',
        fontFamily: 'Ubuntu-R',
        fontSize: 10,
        marginTop: 5
    },

    distance: {
        color: '#8D8D8D',
        fontFamily: 'Ubuntu-R',
        fontSize: 10,
        marginTop: 5
    },

    openText: {
        color: '#31C830',
        fontFamily: 'Ubuntu-R',
        fontSize: 12
    }
})

export default FoodBloggerDetailCard