import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Image,
    ScrollView
} from 'react-native';

import { Actions as NavigationActions } from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';
import Modal from 'react-native-modal';
import OrderCard from './OrderCard';
import Constants from '../../Lib/Constants';

import styles from './style';

const { BillEntity } = Constants;

class Bill extends Component {
    constructor(props) {
        super(props)
        this.state = {
            share: true,
            showModal: false
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

                <Modal
                    isVisible={this.state.showModal}
                    onBackdropPress={() => this.setState({ showModal: false })}
                >
                    <View style={styles.modalContainer}>
                        <TouchableOpacity style={styles.modalCloseButton} onPress={() => { this.setState({showModal: false}); }}>
                            <Image source={require('../../assets/images/close_icon.png')}/>    
                        </TouchableOpacity>
                        
                        <Text style={styles.modalHeaderText}>Payment Method</Text>
                        <View style={styles.modalHeaderLine}/>
                        <View style={styles.modalPaymentButtonsContainer}>
                            <TouchableOpacity style={[styles.modalPaymentButton, {borderWidth: 1, borderColor: '#1E81CE'}]}>
                                <Text style={styles.modalPaymentButtonText}>CASH</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={[styles.modalPaymentButton, {borderWidth: 1, borderColor: '#1E81CE'}]}>
                                <Text style={styles.modalPaymentButtonText}>CARD</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={[styles.modalPaymentButton]}>
                                <Image source={require('../../assets/images/home_dbs_payment.png')}/>
                            </TouchableOpacity>

                            <TouchableOpacity style={[styles.modalPaymentButton]}>
                                <Image source={require('../../assets/images/home_grab_payment.png')}/>
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity onPress={() => { this.setState({showModal: false}); }} style={{marginBottom: 30, marginTop: 80}}>
                            <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 1}} colors={['#1E81CE', '#78B9EB']} style={styles.modalProceedButton}>
                                <Text style={{fontFamily: 'Ubuntu-B', fontSize: 18, color: 'white'}}>Proceed</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </Modal>

                <TouchableOpacity style={{marginBottom: 15, marginTop: 15}} onPress={() => { this.setState({showModal: true}); }}>
                    <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 1}} colors={['#1E81CE', '#78B9EB']} style={styles.checkButtonContainer}>
                        <Text style={{fontFamily: 'Ubuntu-B', fontSize: 18, color: 'white'}}>Checkout</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Bill;