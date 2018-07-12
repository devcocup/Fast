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

import PromotionCard from '../home/PromotionCard';
import SuggestionCard from '../home/SuggestionCard';
import Constants from '../../Lib/Constants';
import styles from './style.js';

const { Promotions, Suggestions } = Constants

class Discover extends Component {

    constructor (props) {
        super(props);

        this.state = {
            is_open: false
        }
    }

    openSubCategory() {
        this.setState({
            is_open: !this.state.is_open
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.navigationBarContainer}>
                        <TouchableOpacity style={styles.menuButton} onPress={() => NavigationAction.drawerOpen()}>
                            <Image source={require('../../assets/images/menu_icon_blue.png')} />
                        </TouchableOpacity>

                        {/* <View style={{marginLeft: 'auto', flexDirection: 'row'}}>
                            <TouchableOpacity style={styles.profileButton}>
                                <Image source={require('../../assets/images/home_profile.png')} />
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.emailButton}>
                                <Image source={require('../../assets/images/home_email.png')} />
                            </TouchableOpacity>
                        </View> */}
                    </View>

                    <ImageBackground source={require('../../assets/images/home_header_image.png')} style={styles.headerContainer}>
                        <View style={styles.headerButtonsContainer}>
                            <TouchableOpacity style={styles.headerButton} onPress={() => NavigationAction.scan()}>
                                <Image source={require('../../assets/images/home_scan.png')} style={styles.headerButtonImage}/>
                                <Text style={styles.headerButtonText}>Scan</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.headerButton} onPress={() => NavigationAction.nearby()}>
                                <Image source={require('../../assets/images/home_nearby.png')} style={styles.headerButtonImage}/>
                                <Text style={styles.headerButtonText}>Near me</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.headerButton} onPress={() => NavigationAction.bill()}>
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

                        <TouchableOpacity style={styles.categoryButton} onPress={() => this.openSubCategory()}>
                            <ImageBackground source={require('../../assets/images/home_food_category.png')} style={styles.categoryImage}>
                                <Text style={styles.categoryText}>Food Category</Text>
                            </ImageBackground>
                        </TouchableOpacity>
                    </ScrollView>

                    {
                        this.state.is_open && (
                            <View style={styles.subCategorysContainer}>
                                <TouchableOpacity style={styles.subCategoryContainer}>
                                    <Image source={require('../../assets/images/home_chinese.png')} style={styles.subCategoryImage} borderRadius={10}/>
                                    <Text style={styles.subCategoryText}>Chinese</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.subCategoryContainer}>
                                    <Image source={require('../../assets/images/home_western.png')} style={styles.subCategoryImage} borderRadius={10}/>
                                    <Text style={styles.subCategoryText}>Western</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.subCategoryContainer}>
                                    <Image source={require('../../assets/images/home_muslim.png')} style={styles.subCategoryImage} borderRadius={10}/>
                                    <Text style={styles.subCategoryText}>Muslim</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.subCategoryContainer}>
                                    <Image source={require('../../assets/images/home_japanese.png')} style={styles.subCategoryImage} borderRadius={10}/>
                                    <Text style={styles.subCategoryText}>Japanese</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.subCategoryContainer}>
                                    <Image source={require('../../assets/images/home_indian.png')} style={styles.subCategoryImage} borderRadius={10}/>
                                    <Text style={styles.subCategoryText}>Indian</Text>
                                </TouchableOpacity>
                            </View>
                        )
                    }

                    <View style={{marginTop: 30}}>
                        <View style={styles.modalHeader}>
                            <Text style={styles.modalHeaderTitleText}>Ongoing Promotion</Text>
                            <TouchableOpacity>
                                <Text style={styles.moreText}>More ></Text>
                            </TouchableOpacity>
                        </View>

                        <ScrollView horizontal={true} style={{marginTop: 10}}>
                            {
                                Promotions.map((promotion, index) => {
                                    return (
                                        <PromotionCard key={index * 10 + 1} content={promotion}/>
                                    )
                                })
                            }
                        </ScrollView>
                    </View>

                    <View style={{marginTop: 30}}>
                        <View style={styles.modalHeader}>
                            <Text style={styles.modalHeaderTitleText}>Ongoing Promotion</Text>
                            <TouchableOpacity>
                                <Text style={styles.moreText}>More ></Text>
                            </TouchableOpacity>
                        </View>

                        <ScrollView horizontal={true} style={{marginTop: 10, marginBottom: 20}}>
                            {
                                Suggestions.map((suggestion, index) => {
                                    return (
                                        <SuggestionCard key={index * 100 + 2} content={suggestion}/>
                                    )
                                })
                            }
                        </ScrollView>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

export default Discover;