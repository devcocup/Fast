import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    ImageBackground,
    Image
} from 'react-native';

import NearByCard from '../nearby/NearByCard';
import Constants from '../../Lib/Constants';
import Modal from 'react-native-modal';
import styles from './style.js';
import LinearGradient from '../../../node_modules/react-native-linear-gradient';

const { NearByEntities } = Constants

const DistanceList = [
    {
        selected: true,
        text: '1km'
    },
    {
        selected: false,
        text: '3km'
    },
    {
        selected: false,
        text: '5km'
    },
    {
        selected: false,
        text: '10km'
    },
    {
        selected: false,
        text: 'Show All'
    }
]

class Category extends Component {

    constructor (props) {
        super(props);

        this.state = {
            queue: true,
            rating: false,
            distance: false,
            distance_text: 'Distance',
            isDistanceModalVisible: false,
            value: "",
            distanceList: []
        }
    }

    componentWillMount() {
        this.setState({
            distanceList: DistanceList
        })
    }

    selectQueue() {
        this.setState({
            queue: true,
            rating: false,
            distance: false,
            distance_text: 'Distance'
        })
    }

    selectRate() {
        this.setState({
            queue: false,
            rating: true,
            distance: false,
            distance_text: 'Distance'
        })
    }

    showDistanceModal() {
        this.setState({
            isDistanceModalVisible: true
        })
    }

    selectDistance() {
        if (this.state.value == undefined || this.state.value == "") {
            this.setState({
                isDistanceModalVisible: false,
                distance_text: '1km',
                queue: false,
                rating: false,
                distance: true
            })    
        } else {
            this.setState({
                isDistanceModalVisible: false,
                distance_text: this.state.value,
                queue: false,
                rating: false,
                distance: true
            })
        }
    }

    chooseDistance = (index) => {
        var tmp = this.state.distanceList
        for (let i = 0; i < tmp.length; i++) {
            tmp[i].selected = i == index ? true : false
            if (i == index) {
                this.setState({
                    value: tmp[i].text
                })
            }
        }

        this.setState({
            distanceList: tmp
        })
    }

    render() {
        const NavigationAction = this.props.navigation;
        const title = NavigationAction.getParam('title', 'Chinese Cuisine')
        const startColor = NavigationAction.getParam('startColor', '#FF416C')
        const endColor = NavigationAction.getParam('endColor', '#EF7676')

        return (
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <TouchableOpacity style={styles.backButton} onPress={() => NavigationAction.goBack()}>
                        <Image source={require('../../assets/images/black_back_icon.png')} />
                    </TouchableOpacity>

                    <Text style={styles.headerText}>{title}</Text>

                    <TouchableOpacity style={styles.searchButton} onPress={() => NavigationAction.navigate('Search')}>
                        <Image source={require('../../assets/images/search_icon.png')}/>
                    </TouchableOpacity>
                </View>

                <View style={styles.categoryContainer}>
                    <ScrollView  horizontal={true} showsHorizontalScrollIndicator={false}>
                    {
                        this.state.queue ? (
                            <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 1}} colors={[startColor, endColor]} style={styles.linearContainer}>
                                <TouchableOpacity onPress={() => this.selectQueue()}>
                                    <Text style={styles.selectedButtonText}>Queue Time</Text>
                                </TouchableOpacity>
                            </LinearGradient>
                        ) : (
                            <TouchableOpacity style={styles.button} onPress={() => this.selectQueue()}>
                                <Text style={styles.buttonText}>Queue Time</Text>
                            </TouchableOpacity>    
                        )
                    }

                    {
                        this.state.rating ? (
                            <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 1}} colors={[startColor, endColor]} style={styles.linearContainer}>
                                <TouchableOpacity onPress={() => this.selectRate()}>
                                    <Text style={styles.selectedButtonText}>Rating</Text>
                                </TouchableOpacity>
                            </LinearGradient>
                        ) : (
                            <TouchableOpacity style={styles.button} onPress={() => this.selectRate()}>
                                <Text style={styles.buttonText}>Rating</Text>
                            </TouchableOpacity>    
                        )
                    }

                    {
                        this.state.distance ? (
                            <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 1}} colors={[startColor, endColor]} style={styles.linearContainer}>
                                <TouchableOpacity onPress={() => this.showDistanceModal()}>
                                    <Text style={styles.selectedButtonText}>{this.state.distance_text}</Text>
                                </TouchableOpacity>
                            </LinearGradient>
                        ) : (
                            <TouchableOpacity style={styles.button} onPress={() => this.showDistanceModal()}>
                                <Text style={styles.buttonText}>{this.state.distance_text}</Text>
                            </TouchableOpacity>    
                        )
                    }
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

                <Modal
                    isVisible={this.state.isDistanceModalVisible}
                    onBackdropPress={() => this.setState({ isDistanceModalVisible: false })}
                >
                    <View style={styles.modalContainer}>
                        <TouchableOpacity style={styles.modalCloseButton} onPress={() => { this.setState({isDistanceModalVisible: false}); }}>
                            <Image source={require('../../assets/images/close_icon.png')}/>    
                        </TouchableOpacity>
                        
                        <Text style={styles.modalHeaderText}>Distance From You</Text>
                        <View style={styles.modalDistanceListContainer}>
                        {
                            this.state.distanceList.map((item, index) => {
                                return (
                                    <TouchableOpacity style={item.selected ? styles.selectedDistanceButton:styles.distanceButton} onPress={() => this.chooseDistance(index)}>
                                        <Text style={item.selected ? styles.selectedDistanceButtonText : styles.distanceButtonText}>{item.text}</Text>
                                    </TouchableOpacity>
                                )
                            })
                        }                          
                        </View>

                        <TouchableOpacity onPress={() => this.selectDistance()} style={styles.selectDistanceButton}>
                            <Text style={{fontFamily: 'Ubuntu-M', fontSize: 13}}>Select</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
            </View>
        );
    }
}

export default Category;