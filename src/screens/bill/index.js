import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Image,
    ScrollView
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import OrderCard from './OrderCard';
import Constants from '../../Lib/Constants';

import styles from './style';

const { BillEntity } = Constants;

class Bill extends Component {
    constructor(props) {
        super(props)
        this.state = {
            share: true
        }
    }

    toggleDining() {
        this.setState({
            share: !this.state.share
        })
    }

    render() {
        return (
            <View style={styles.container}>
               <TouchableOpacity style={styles.backButton} onPress={() => NavigationActions.pop()}>
                    <Image source={require('../../assets/images/black_back_icon.png')} style={{resizeMode: 'contain'}}/>
                </TouchableOpacity>

                <Text style={styles.headerText}>View Bill</Text>

                <View style={styles.diningContainer}>
                    <TouchableOpacity onPress={() => this.toggleDining()}>
                        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 1}} colors={['#1E81CE', '#78B9EB']} style={styles.diningHeader}>
                            <Text style={{fontFamily: 'Ubuntu-M', fontSize: 30, color: 'white', marginRight: 'auto'}}>Dining</Text>
                            <Text style={{fontFamily: 'Ubuntu-M', fontSize: 30, color: 'white'}}>$13.80</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    {
                        this.state.share ? (
                            <View style={styles.diningContent}>
                                <Image source={BillEntity.image} style={styles.diningImage}/>
                                <View style={styles.diningTextContainer}>
                                    <Text style={styles.diningTitle}>{BillEntity.title}</Text>
                                    <Text style={styles.dininglocation}>{BillEntity.location}</Text>
                                    <TouchableOpacity style={styles.diningShareButton}>
                                        <Image source={require('../../assets/images/share_icon.png')}/>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        ) : null 
                    }
                </View>

                <View style={styles.orderContainer}>
                    <View style={styles.orderHeader}>
                        <Text style={{fontFamily: 'Ubuntu-M', fontSize: 30, color: '#1E81CE', marginRight: 'auto'}}>Order</Text>
                        <Text style={styles.orderCount}>2</Text>
                    </View>
                    
                    <ScrollView style={styles.detailContainer}>
                        <Text style={{
                            fontFamily: 'Ubuntu-L',
                            fontSize: 10,
                            color: '#515151',
                            marginTop: 8,
                            marginBottom: 8
                        }}>Here is the summary of your order on {BillEntity.title}.</Text>
                        {
                            BillEntity.orders.map((order, index) => {
                                return (
                                    <OrderCard content={order} />
                                )
                            })
                        }
                    </ScrollView>
                </View>

                <TouchableOpacity style={{marginBottom: 15, marginTop: 15}}>
                    <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 1}} colors={['#1E81CE', '#78B9EB']} style={styles.checkButtonContainer}>
                        <Text style={{fontFamily: 'Ubuntu-B', fontSize: 18, color: 'white'}}>Checkout</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Bill;