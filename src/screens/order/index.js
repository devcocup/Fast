import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    TextInput,
    Image
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import OrderCard from './OrderCard';
import Constants from '../../Lib/Constants';
import Modal from 'react-native-modal';
import styles from './style.js';

const { NearByEntities } = Constants

class Order extends Component {

    constructor (props) {
        super(props);

        this.state = {
            dim: true,
            fried: false,
            mian: false,
        }
    }

    selectDim() {
        this.setState({
            dim: true,
            fried: false,
            mian: false
        })
    }

    selectFried() {
        this.setState({
            dim: false,
            fried: true,
            mian: false
        })
    }

    selectMian() {
        this.setState({
            dim: false,
            fried: false,
            mian: true
        })
    }

    showOrderModal() {
        this.setState({
            isShowOrderModalVisible: true
        })
    }

    render() {
        const NavigationAction = this.props.navigation;
        return (
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <Text style={styles.headerText}>E-MENU</Text>
                    <Text style={styles.header}>Crystal Jade Restaurant (Tampines Mall)</Text>
                </View>

                <View style={styles.categoryContainer}>
                    <ScrollView  horizontal={true} showsHorizontalScrollIndicator={false}>
                        <TouchableOpacity style={this.state.dim ? styles.selectedButton : styles.button} onPress={() => this.selectDim()}>
                            <Text style={this.state.dim ? styles.selectedButtonText : styles.buttonText}>Dim Sum</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={this.state.fried ? styles.selectedButton : styles.button} onPress={() => this.selectFried()}>
                            <Text style={this.state.fried ? styles.selectedButtonText : styles.buttonText}>Fried Rice</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={this.state.mian ? styles.selectedButton : styles.button} onPress={() => this.selectMian()}>
                            <Text style={this.state.mian ? styles.selectedButtonText : styles.buttonText}>La Mian</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>

                <ScrollView style={styles.bodyContainer}>
                {
                    NearByEntities.map((item, index) => {
                        return (
                            <OrderCard 
                                content={item}
                                onPress={() => this.showOrderModal()}
                            /> 
                        )
                    })
                }
                </ScrollView>

                <Modal
                    isVisible={this.state.isShowOrderModalVisible}
                    onBackdropPress={() => this.setState({ isShowOrderModalVisible: false })}
                >
                    <View style={styles.modalContainer}>
                        <TouchableOpacity style={styles.modalCloseButton} onPress={() => { this.setState({showModal: false}); }}>
                            <Image source={require('../../assets/images/close_icon.png')}/>    
                        </TouchableOpacity>

                        <Image source={require('../../assets/images/view_order.png')} style={{width: 200, height: 150, marginTop: 30}}/>
                        
                        <Text style={styles.modalHeaderText}>Herbal Shrimp Wanton</Text>
                        <Text style={styles.modalCostText}>$6.90</Text>
                        <Text style={styles.modalDescriptionText} flexWrap="wrap">Freshwater shrimp wrap with crstal nice skin</Text>

                        <View style={{flexDirection: 'row', marginTop: 10, width: 200}}>
                            <TextInput 
                                style={styles.modalTextInput} 
                                underlineColorAndroid='transparent'
                                placeholder="0"
                                textAlign={'center'}
                            />
                            <View>
                                <View style={{flexDirection: 'row'}}>
                                    <TouchableOpacity style={{marginLeft: 'auto', marginRight: 'auto'}}>
                                        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 1}} colors={['#EF7676', '#FF416C']} style={styles.modalButtonContainer}>
                                            <Text style={styles.modalButtonText}>+</Text>
                                        </LinearGradient>
                                    </TouchableOpacity>

                                    <TouchableOpacity style={{marginLeft: 'auto', marginRight: 'auto'}}>
                                        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 1}} colors={['#EF7676', '#FF416C']} style={styles.modalButtonContainer}>
                                            <Text style={styles.modalButtonText}>-</Text>
                                        </LinearGradient>
                                    </TouchableOpacity>
                                </View>
                                <TouchableOpacity onPress={() => this.selectDistance()}>
                                    <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 1}} colors={['#EF7676', '#FF416C']} style={styles.modalOrderButton}>
                                        <Text style={{color: 'white', fontFamily: 'Ubuntu-M', fontSize: 18}}>Add to Order</Text>
                                    </LinearGradient>
                                </TouchableOpacity>
                            </View>
                        </View>

                        
                    </View>
                </Modal>
            </View>
        );
    }
}

export default Order;