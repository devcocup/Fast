import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
import FoodBloggerDetailCard from './FoodBloggerDetailCard';

const { height, width } = Dimensions.get('window')

const FoodBloggerCard = ({content, selected = false, onPress}) => {
    const image = selected ? require('../../assets/images/up_icon.png') : require('../../assets/images/down_icon.png')
    return (
        <View style={{alignItems: 'center', paddingLeft: 10, paddingRight: 10}}>
            <View style={styles.container}>
                <Image source={content.image} style={styles.image}/>
                <Text style={styles.title}>{content.title}</Text>
                <Text style={styles.by}>by {content.by}</Text>
                <TouchableOpacity style={styles.detailButtonContainer} onPress={onPress}>
                    <Image source={image} />
                </TouchableOpacity>
            </View>

            {
                selected && (
                    <FoodBloggerDetailCard content={content.detail}/>
                )
            }
        </View>
    )        
}

const styles = StyleSheet.create({
    container: {
        height: 270,
        borderRadius: 10,
        backgroundColor: 'white',
        marginLeft: 10,
        marginRight: 10
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
        fontFamily: 'Ubuntu-R',
        paddingLeft: 15,
        paddingRight: 15
    },
     
    by: {
        width: 200,
        color: '#8D8D8D',
        fontFamily: 'Ubuntu-R',
        fontSize: 12,
        paddingLeft: 15,
        paddingRight: 15,
        marginTop: 5
    },

    detailButtonContainer: {
        marginTop: 'auto',
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default FoodBloggerCard