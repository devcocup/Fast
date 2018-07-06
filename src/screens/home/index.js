import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    ImageBackground,
    Image
} from 'react-native';

import styles from './style.js';

class Home extends Component {

    constructor (props) {
        super(props);

        this.state = {
            is_open: true
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.navigationBarContainer}>
                        <TouchableOpacity style={styles.menuButton}>
                            <Image source={require('../../assets/images/menu_icon_blue.png')} />
                        </TouchableOpacity>

                        <View style={{marginLeft: 'auto', flexDirection: 'row'}}>
                            <TouchableOpacity style={styles.profileButton}>
                                <Image source={require('../../assets/images/home_profile.png')} />
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.emailButton}>
                                <Image source={require('../../assets/images/home_email.png')} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <ImageBackground source={require('../../assets/images/home_header_image.png')} style={styles.headerContainer}>
                        <View style={styles.headerButtonsContainer}>
                            <TouchableOpacity style={styles.headerButton}>
                                <Image source={require('../../assets/images/home_scan.png')} style={styles.headerButtonImage}/>
                                <Text style={styles.headerButtonText}>Scan</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.headerButton}>
                                <Image source={require('../../assets/images/home_nearby.png')} style={styles.headerButtonImage}/>
                                <Text style={styles.headerButtonText}>Near me</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.headerButton}>
                                <Image source={require('../../assets/images/home_bill.png')} style={styles.headerButtonImage}/>
                                <Text style={styles.headerButtonText}>View Bill</Text>
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>

                    <View style={styles.ePaymentContainer}>
                        <Text style={styles.ePaymentText}>e-Payment</Text>
                        <View style={styles.ePaymentButtons}>
                            <TouchableOpacity style={styles.ePaymentButton}>
                                <Image source={require('../../assets/images/home_dbs_payment.png')}/>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.ePaymentButton}>
                                <Image source={require('../../assets/images/home_grab_payment.png')}/>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <ScrollView style={styles.categoryContainer} horizontal={true}>
                        <TouchableOpacity style={styles.categoryButton}>
                            <ImageBackground source={require('../../assets/images/home_discover.png')} style={styles.categoryImage}>
                                <Text style={styles.categoryText}>Discover</Text>
                            </ImageBackground>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.categoryButton}>
                            <ImageBackground source={require('../../assets/images/home_promotion.png')} style={styles.categoryImage}>
                                <Text style={styles.categoryText}>Promotion</Text>
                            </ImageBackground>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.categoryButton}>
                            <ImageBackground source={require('../../assets/images/home_food_category.png')} style={styles.categoryImage}>
                                <Text style={styles.categoryText}>Food Category</Text>
                            </ImageBackground>
                        </TouchableOpacity>
                    </ScrollView>
                </ScrollView>
            </View>
        );
    }
}

export default Home;