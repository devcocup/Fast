import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native'

const { height, width } = Dimensions.get('window')

const NearByCard = ({content, category, queue, rating, distance}) => {

    return (
        <View style={styles.container}>
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

                <View style={styles.reviewContainer}>
                    {
                        !rating ? (
                            <Image source={content.rating_image} style={styles.reviewImage}/>
                        ) : null
                    }
                    <Text style={styles.reviewText}>{content.review} Reviews</Text>
                </View>

                <Text style={styles.locationText}>{content.location}</Text>
                <Text style={styles.categoryText}>{content.category}</Text>
                {
                    !distance ? (
                        <Text style={styles.distanceText}>{content.distance}m</Text>
                    ) : null
                }
            </View>

            <View style={{justifyContent: 'flex-end', marginLeft: 'auto', marginRight: 15}}>
                {
                    queue ? (
                        <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                            <Text style={{fontFamily: 'Ubuntu-BI', fontSize: 22, color: '#5CEB56'}}>{content.time}</Text>
                            <Text style={{fontFamily: 'Ubuntu-B', fontSize: 11, marginLeft: 5, textAlignVertical: 'bottom', paddingBottom: 3}}>MIN</Text>
                        </View>
                    ) : (
                        rating ? (
                            <View style={{flexDirection: 'row'}}>
                                <Text style={{fontFamily: 'Ubuntu-BI', fontSize: 22, color: '#F7901E'}}>{content.rating}</Text>
                                <Text style={{fontFamily: 'Ubuntu-B', fontSize: 11, marginLeft: 5, textAlignVertical: 'bottom', paddingBottom: 3}}>STAR</Text>
                            </View>
                        ) : (
                            distance ? (
                                <View style={{flexDirection: 'row'}}>
                                <Text style={{fontFamily: 'Ubuntu-BI', fontSize: 22, color: '#F7901E'}}>{content.distance}</Text>
                                <Text style={{fontFamily: 'Ubuntu-B', fontSize: 11, marginLeft: 5, textAlignVertical: 'bottom', paddingBottom: 3}}>M</Text>
                            </View>
                            ) : null
                        )
                    )
                }
            </View>
        </View>
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
     
    reviewContainer: {
        flexDirection: 'row',
        marginTop: 5
    },

    reviewImage: {
        marginRight: 10,
        justifyContent: 'flex-end'
    },

    reviewText: {
        fontFamily: 'Ubuntu-R',
        fontSize: 8
    },

    locationText: {
        fontFamily: 'Ubuntu-R',
        fontSize: 10,
        marginTop: 5
    },

    categoryText: {
        fontFamily: 'Ubuntu-R',
        fontSize: 10
    },

    distanceText: {
        fontFamily: 'Ubuntu-R',
        fontSize: 10
    }
})

export default NearByCard