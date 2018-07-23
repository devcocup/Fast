import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'

const { height, width } = Dimensions.get('window')

const OrderCard = ({content, onPress}) => {

    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View style={styles.imageContainer}>
                <Image source={content.image} style={styles.image}/>
                <Text style={{fontFamily: 'Ubuntu-R', fontSize: 10, marginTop: 5}}>Close at {content.close}</Text>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.title}>{content.title}</Text>
                {
                    content.is_halal? (
                        <Text style={styles.halalText}>Halal</Text>
                    ) : (
                        <Text style={styles.nonHalalText}>Non Halal</Text>
                    )
                }

                <Text style={styles.locationText}>{content.location}</Text>
                <Text style={styles.categoryText}>{content.category}</Text>
            </View>
        </TouchableOpacity>
    )        
}

const styles = StyleSheet.create({
    container: {
        borderBottomColor: '#E1E1E1',
        borderBottomWidth: 0.5,
        flexDirection: 'row'
    },

    imageContainer: {
        alignItems: 'center',
        paddingLeft: 15,
        paddingTop: 10,
        paddingRight: 15,
        marginBottom: 10
    },

    image: {
        width: 120,
        height: 75,
        borderRadius: 10,
        resizeMode: 'contain',
    },

    infoContainer: {
        paddingTop: 5
    },

    title: {
        fontSize: 15,
        fontFamily: 'Ubuntu-M'
    },

    halalText: {
        fontSize: 10,
        fontFamily: 'Ubuntu-M',
        color: '#46D942',
        marginTop: 5
    },

    nonHalalText: {
        fontSize: 10,
        fontFamily: 'Ubuntu-M',
        color: '#FC3F2C',
        marginTop: 5
    },

    locationText: {
        fontFamily: 'Ubuntu-R',
        fontSize: 10,
        marginTop: 5
    },

    categoryText: {
        fontFamily: 'Ubuntu-R',
        fontSize: 10
    }
})

export default OrderCard