import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'

const { height, width } = Dimensions.get('window')

const OrderCard = ({content}) => {

    return (
        <View style={styles.container}>
            <View style={styles.editContainer}>
                <Image source={content.image} style={styles.image}/>
                <TouchableOpacity style={styles.editButton}>
                    <Text style={{fontFamily: 'Ubuntu-M', fontSize: 11}}>Edit</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.orderInfoContainer}>
                <Text style={{fontFamily: 'Ubuntu-B', fontSize: 12}}>{content.title}</Text>
                {
                    content.descriptions.map((description, index) => {
                        return (
                            <Text style={{fontFamily: 'Ubuntu-LI', fontSize: 10, width: 120, flexWrap: 'wrap', marginTop: 10}}>{description}</Text>
                        )
                    })
                }
            </View>
            <View style={styles.extraContainer}>
                <TouchableOpacity style={{alignSelf: 'flex-end',marginTop: 'auto', marginBottom: 'auto'}}>
                    <Image source={require('../../assets/images/close_icon.png')}/>
                </TouchableOpacity>
                <Text style={styles.countText}>{content.count}</Text>
                <Text style={styles.costText}>{content.cost}</Text>
            </View>
        </View>
    )        
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        borderBottomWidth: 0.5,
        borderBottomColor: '#D6D6D6'
    },

    editContainer: {
        alignItems: 'center'
    },

    image: {
        width: 70,
        height: 50,
        resizeMode: 'contain'
    },

    editButton: {
        width: 55,
        height: 20,
        borderWidth: 1,
        borderColor: '#1E81CE',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        marginTop: 5,
        marginBottom: 5
    },

    orderInfoContainer: {
        marginLeft: 10
    },

    extraContainer: {
        marginLeft: 'auto',
        alignItems: 'center',
        justifyContent: 'center'
    },

    countText: {
        fontSize: 20,
        fontWeight: 'bold',
        width: 30,
        height: 30,
        backgroundColor: '#FBFBFB',
        borderWidth: 1,
        borderColor: '#C1C1C1',
        textAlign: 'center',
        textAlignVertical: 'center',
        marginTop: 'auto',
        marginBottom: 'auto'
    },

    costText: {
        fontFamily: 'Ubuntu-BI',
        fontSize: 18,
        color: '#FF9100',
        marginTop: 'auto',
        marginBottom: 'auto'
    }
})

export default OrderCard