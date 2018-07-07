import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'

const { height, width } = Dimensions.get('window')

const FollowingCard = ({content}) => {

    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.infoContainer}>
                <Text style={styles.title}>{content.title}</Text>
                <Text style={styles.location}>{content.location}</Text>
                <Text style={styles.category}>{content.category}</Text>
                <TouchableOpacity style={styles.followButton}>
                    <Image source={require('../../assets/images/following_icon.png')}/>
                </TouchableOpacity>
            </View>
            <Image source={content.image} style={styles.image}/>
        </TouchableOpacity>
    )        
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20
    },

    image: {
        position: 'absolute',
        width: 150,
        height: 90,
        borderRadius: 10,
        resizeMode: 'contain',
        left: 0
    },

    infoContainer: {
        alignItems: 'flex-end',
        borderRadius: 10,
        backgroundColor: 'white',
        padding: 10,
        width: width * 0.75
    },

    title: {
        width: 150,
        fontSize: 15,
        fontFamily: 'Ubuntu-M'
    },
     
    category: {
        width: 150,
        color: '#212121',
        fontFamily: 'Ubuntu-R',
        fontSize: 10,
        marginTop: 5
    },

    location: {
        width: 150,
        color: '#212121',
        fontFamily: 'Ubuntu-R',
        fontSize: 10,
        marginTop: 15
    },

    followButton: {
        marginTop: 10
    }
})

export default FollowingCard