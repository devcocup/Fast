import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native'

const { height, width } = Dimensions.get('window')

const RestaurantPromotionCard = ({content, odd}) => {

    return (
        <View style={[styles.container, odd ? null : {borderBottomColor: '#B1B1B1', borderBottomWidth: 1}]}>
            <Image source={content.image} style={styles.image}/>
            <View style={styles.infoContainer}>
                <Text style={styles.titleText} flexWrap='wrap'>{content.title}</Text>
                {
                    content.descriptions.map((description, index) => {
                        return(
                            <Text style={styles.descriptionText}>{description}</Text>
                        )
                    })
                }
            </View>
        </View>
    )        
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10
    },

    image: {
        width: 90,
        height: 120,
        resizeMode: 'contain'
    },

    infoContainer: {
        marginLeft: 10,
        width: 185,
        justifyContent: 'center'
    },

    titleText: {
        fontFamily: 'Ubuntu-M',
        fontSize: 13,
        marginBottom: 20
    },

    descriptionText: {
        fontFamily: 'Ubuntu-LI',
        fontSize: 13
    }
})

export default RestaurantPromotionCard