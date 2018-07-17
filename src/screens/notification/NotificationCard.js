import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'

const { height, width } = Dimensions.get('window')

const NotificationCard = ({content, odd}) => {

    return (

        odd ? (
            <TouchableOpacity style={styles.container}>
                <View style={styles.infoContainer}>
                    <Text style={styles.dateText}>{content.date}</Text>
                    <Text style={styles.titleText}>{content.title}</Text>
                    <Text style={styles.descriptionText}>{content.description}</Text>
                </View>
                <Image source={content.image} style={[styles.image, {right: 0}]}/>
            </TouchableOpacity>
        ) : (
            <TouchableOpacity style={[styles.container, {justifyContent: 'flex-end'}]}>
                <View style={styles.infoContainer}>
                    <View style={{borderColor: 'red', borderWidth: 1, marginLeft: 50}}>
                        <Text style={styles.dateText}>{content.date}</Text>
                        <Text style={styles.titleText}>{content.title}</Text>
                        <Text style={styles.descriptionText}>{content.description}</Text>
                    </View>
                </View>
                <Image source={content.image} style={[styles.image, {left: 0}]}/>
            </TouchableOpacity>
        )
    )        
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        height: 140
    },

    image: {
        position: 'absolute',
        width: 80,
        height: 100,
        resizeMode: 'contain',
        marginTop: 10,
        marginBottom: 10
    },

    infoContainer: {
        height: '100%',
        width: '90%',
        borderRadius: 10,
        backgroundColor: 'white',
        padding: 10
    },

    dateText: {
        fontSize: 12,
        color: '#454F63'
    },

    titleText: {
        fontFamily: 'Ubuntu-M',
        fontSize: 14
    },

    descriptionText: {
        marginTop: 15,
        fontSize: 12,
        color: '#78849E'
    }
})

export default NotificationCard