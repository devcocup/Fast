import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native'

const { height, width } = Dimensions.get('window')

const PromotionCard = ({content}) => {

    return (
        <View style={styles.container}>
            <Image source={content.image} style={styles.image}/>
            <Text style={styles.title}>{content.title}</Text>
            <View style={{marginBottom: 20}}>
            {
                content.descriptions.map((description, index) => {
                    return (
                        <Text key={index * 1000 + 3} style={styles.description}>{description}</Text>
                    )
                })
            }
            </View>
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
        fontSize: 15,
        fontFamily: 'Ubuntu-M',
        paddingLeft: 15,
        paddingRight: 15
    },
     
    description: {
        width: 200,
        color: '#8D8D8D',
        fontFamily: 'Ubuntu-R',
        fontSize: 12,
        paddingLeft: 15,
        paddingRight: 15,
        marginTop: 5
    }
})

export default PromotionCard