import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView
} from 'react-native';

import { Actions as NavigationActions } from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';
import OrderHistoryCard from './OrderHistoryCard';
import Constants from '../../Lib/Constants';

import styles from './style.js';

const { OrderHistories } = Constants

class Following extends Component {
    constructor(props) {
        super(props);

        this.state = {
            date_selected: true,
            amount_selected: false,
            payment_selected: false
        }
    }

    dateSelect() {
        this.setState({
            date_selected: true,
            amount_selected: false,
            payment_selected: false
        })
    }

    amountSelect() {
        this.setState({
            date_selected: false,
            amount_selected: true,
            payment_selected: false
        })
    }

    paymentSelect() {
        this.setState({
            date_selected: false,
            amount_selected: false,
            payment_selected: true
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 1}} colors={['#1E81CE', '#78B9EB']}>

                    <TouchableOpacity style={styles.backButton} onPress={() => NavigationActions.pop()}>
                        <Image source={require('../../assets/images/back_icon.png')} style={{resizeMode: 'contain'}}/>
                    </TouchableOpacity>

                    <View style={styles.headerContainer}>
                        <Text style={styles.headerText}>Order History</Text>
                        <View style={styles.infoContainer}>
                            <View style={{padding: 20}}>
                                <View style={styles.itemContainer}>
                                    <Text style={{color: 'white', fontFamily: 'Ubuntu-R', fontSize: 11, width: 70}}>CASH</Text>
                                    <Text style={{color: 'white', fontFamily: 'Ubuntu-R', fontSize: 11}}>40.4%</Text>
                                </View>

                                <View style={styles.itemContainer}>
                                    <Text style={{color: 'white', fontFamily: 'Ubuntu-R', fontSize: 11, width: 70}}>PayLah!</Text>
                                    <Text style={{color: 'white', fontFamily: 'Ubuntu-R', fontSize: 11}}>59.6%</Text>
                                </View>

                                <View style={styles.itemContainer}>
                                    <Text style={{color: 'white', fontFamily: 'Ubuntu-R', fontSize: 11, width: 70}}>GrabPay</Text>
                                    <Text style={{color: 'white', fontFamily: 'Ubuntu-R', fontSize: 11}}>0%</Text>
                                </View>
                            </View>

                            <View style={{width: 0.5, height: 70, backgroundColor: 'white'}}/>

                            <View style={{alignItems: 'center', padding: 20}}>
                                <Text style={{color: 'white', fontFamily: 'Ubuntu-M', fontSize: 35}}>$37.50</Text>
                                <Text style={{color: 'white', fontFamily: 'Ubuntu-M', fontSize: 15}}>Total Amount Spend</Text>
                            </View>
                        </View>
                    </View>
                </LinearGradient>

                <View style={styles.bodyContainer}>
                    <View style={styles.buttonsContainer}>
                        <TouchableOpacity style={styles.buttonContainer} onPress={() => this.dateSelect()}>
                            <Text style={{color: this.state.date_selected ? '#1E81CE': '#808080', fontFamily: this.state.date_selected ? 'Ubuntu-BI' : 'Ubuntu-RI', fontSize: 15, textAlign: 'center'}}>Date</Text>
                        </TouchableOpacity>

                        <View style={{width: 0.5, height: 20, backgroundColor: '#D6D6D6'}}/>

                        <TouchableOpacity style={styles.buttonContainer} onPress={() => this.amountSelect()}>
                            <Text style={{color: this.state.amount_selected ? '#1E81CE': '#808080', fontFamily: this.state.amount_selected ? 'Ubuntu-BI' : 'Ubuntu-RI', fontSize: 15, textAlign: 'center'}}>Amount</Text>
                        </TouchableOpacity>

                        <View style={{width: 0.5, height: 20, backgroundColor: '#D6D6D6'}}/>

                        <TouchableOpacity style={styles.buttonContainer} onPress={() => this.paymentSelect()}>
                            <Text style={{color: this.state.payment_selected ? '#1E81CE': '#808080', fontFamily: this.state.payment_selected ? 'Ubuntu-BI' : 'Ubuntu-RI', fontSize: 15, textAlign: 'center'}}>Payment method</Text>
                        </TouchableOpacity>
                    </View>

                    <ScrollView>
                        {
                            OrderHistories.map((orderHistory, index) => {
                                return (
                                    <OrderHistoryCard content={orderHistory}/>
                                )
                            })
                        }
                    </ScrollView>
                </View>
            </View>
        );
    }
}

export default Following;