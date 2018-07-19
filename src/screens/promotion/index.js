import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    ImageBackground,
    Image
} from 'react-native';

import PromotionCard from './PromotionCard';
import Constants from '../../Lib/Constants';
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

class Promotion extends Component {

    constructor (props) {
        super(props);

        this.state = {
            ongoing: false,
            one_for_one: true,
            set_promo: false,
            holiday: false
        }
    }

    selectOngoing() {
        this.setState({
            ongoing: true,
            one_for_one: false,
            set_promo: false,
            holiday: false
        })
    }

    selectOneForOne() {
        this.setState({
            ongoing: false,
            one_for_one: true,
            set_promo: false,
            holiday: false
        })
    }

    selectSetPromo() {
        this.setState({
            ongoing: false,
            one_for_one: false,
            set_promo: true,
            holiday: false
        })
    }

    selectHoliday() {
        this.setState({
            ongoing: false,
            one_for_one: false,
            set_promo: false,
            holiday: true
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

                    <Text style={styles.headerText}>Promotion</Text>

                </View>

                <View style={styles.categoryContainer}>
                    <ScrollView  horizontal={true} showsHorizontalScrollIndicator={false}>
                        <TouchableOpacity style={this.state.ongoing ? styles.selectedButton : styles.button} onPress={() => this.selectOngoing()}>
                            <Text style={this.state.ongoing ? styles.selectedButtonText : styles.buttonText}>Ongoing</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={this.state.one_for_one ? styles.selectedButton : styles.button} onPress={() => this.selectOneForOne()}>
                            <Text style={this.state.one_for_one ? styles.selectedButtonText : styles.buttonText}>1-For-1</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={this.state.set_promo ? styles.selectedButton : styles.button} onPress={() => this.selectSetPromo()}>
                            <Text style={this.state.set_promo ? styles.selectedButtonText : styles.buttonText}>Set Promo</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={this.state.holiday ? styles.selectedButton : styles.button} onPress={() => this.selectHoliday()}>
                            <Text style={this.state.holiday ? styles.selectedButtonText : styles.buttonText}>Holiday</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>

                <ScrollView style={styles.bodyContainer}>
                {
                    NearByEntities.map((item, index) => {
                        return (
                            <PromotionCard 
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

export default Promotion;