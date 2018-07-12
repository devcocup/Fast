import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    ImageBackground,
    Image
} from 'react-native';

import { Actions as NavigationAction } from 'react-native-router-flux';

import NearByCard from './NearByCard';
import Constants from '../../Lib/Constants';
import styles from './style.js';

const { NearByEntities } = Constants

class NearBy extends Component {

    constructor (props) {
        super(props);

        this.state = {
            category: false,
            queue: true,
            rating: false,
            distance: false,
            distance_text: 'Distance'
        }
    }

    selectCategory() {
        this.setState({
            category: true,
            queue: false,
            rating: false,
            distance: false,
        })
    }

    selectQueue() {
        this.setState({
            category: false,
            queue: true,
            rating: false,
            distance: false
        })
    }

    selectRate() {
        this.setState({
            category: false,
            queue: false,
            rating: true,
            distance: false
        })
    }

    selectDistance() {
        this.setState({
            category: false,
            queue: false,
            rating: false,
            distance: true
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <TouchableOpacity style={styles.backButton} onPress={() => NavigationAction.pop()}>
                        <Image source={require('../../assets/images/black_back_icon.png')} />
                    </TouchableOpacity>

                    <Text style={styles.headerText}>NearBy</Text>

                    <TouchableOpacity style={styles.searchButton}>
                        <Image source={require('../../assets/images/search_icon.png')}/>
                    </TouchableOpacity>
                </View>

                <View style={styles.categoryContainer}>
                    <ScrollView  horizontal={true} showsHorizontalScrollIndicator={false}>
                        <TouchableOpacity style={this.state.category ? styles.selectedButton : styles.button} onPress={() => this.selectCategory()}>
                            <Text style={this.state.category ? styles.selectedButtonText : styles.buttonText}>Category</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={this.state.queue ? styles.selectedButton : styles.button} onPress={() => this.selectQueue()}>
                            <Text style={this.state.queue ? styles.selectedButtonText : styles.buttonText}>Queue Time</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={this.state.rating ? styles.selectedButton : styles.button} onPress={() => this.selectRate()}>
                            <Text style={this.state.rating ? styles.selectedButtonText : styles.buttonText}>Rating</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={this.state.distance ? styles.selectedButton : styles.button} onPress={() => this.selectDistance()}>
                            <Text style={this.state.distance ? styles.selectedButtonText : styles.buttonText}>{this.state.distance_text}</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>

                <ScrollView style={styles.bodyContainer}>
                {
                    NearByEntities.map((item, index) => {
                        return (
                            <NearByCard 
                                content={item} 
                                category={this.state.category}
                                queue={this.state.queue}
                                rating={this.state.rating}
                                distance={this.state.distance}
                            /> 
                        )
                    })
                }
                </ScrollView>
            </View>
        );
    }
}

export default NearBy;