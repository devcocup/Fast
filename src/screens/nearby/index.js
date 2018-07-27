import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    ImageBackground,
    Image
} from 'react-native';

import NearByCard from './NearByCard';
import Constants from '../../Lib/Constants';
import Modal from 'react-native-modal';
import styles from './style.js';

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

class NearBy extends Component {

    constructor (props) {
        super(props);

        this.state = {
            category: false,
            queue: true,
            rating: false,
            distance: false,
            distance_text: 'Distance',
            isDistanceModalVisible: false,
            distanceList: []
        }
    }

    componentWillMount() {
        this.setState({
            distanceList: DistanceList
        })
    }

    selectCategory() {
        this.setState({
            category: true,
            queue: false,
            rating: false,
            distance: false,
            distance_text: 'Distance'
        })
    }

    selectQueue() {
        this.setState({
            category: false,
            queue: true,
            rating: false,
            distance: false,
            distance_text: 'Distance'
        })
    }

    selectRate() {
        this.setState({
            category: false,
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
        this.setState({
            isDistanceModalVisible: false,
            distance_text: this.state.value,
            category: false,
            queue: false,
            rating: false,
            distance: true
        })
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
        return (
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <TouchableOpacity style={styles.backButton} onPress={() => NavigationAction.goBack()}>
                        <Image source={require('../../assets/images/black_back_icon.png')} />
                    </TouchableOpacity>

                    <Text style={styles.headerText}>NearBy</Text>

                    <TouchableOpacity style={styles.searchButton} onPress={() => NavigationAction.navigate('Search')}>
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

                        <TouchableOpacity style={this.state.distance ? styles.selectedButton : styles.button} onPress={() => this.showDistanceModal()}>
                            <Text style={this.state.distance ? styles.selectedButtonText : styles.buttonText}>{this.state.distance_text}</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>

                <ScrollView style={styles.bodyContainer}>
                {
                    NearByEntities.map((item, index) => {
                        return (
                            <NearByCard 
                                key={index}
                                content={item}
                                navigation={NavigationAction}
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
                        <TouchableOpacity style={styles.modalCloseButton} onPress={() => { this.setState({showModal: false}); }}>
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

export default NearBy;