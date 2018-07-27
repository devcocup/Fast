import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    ImageBackground,
    Image
} from 'react-native';

import LinearGradient from '../../../node_modules/react-native-linear-gradient';
import RestaurantPromotionCard from './RestaurantPromotionCard';
import Constants from '../../Lib/Constants';
import styles from './style.js';


const { RestaurantPromotionEntities } = Constants

class RestaurantProfile extends Component {

    constructor(props) {
        super(props)
        this.state = {
            like: false
        }
    }
    
    render() {
        const NavigationAction = this.props.navigation;
        const content = NavigationAction.getParam('content')

        return (
            <ScrollView style={styles.container}>
                <ImageBackground source={content.image} style={styles.headerContainer}>
                    <View style={styles.headerButtonsContainer}>
                        <TouchableOpacity onPress={() => NavigationAction.goBack()}>
                            <Image source={require('../../assets/images/back_icon.png')} style={styles.backButton}/>
                        </TouchableOpacity>

                        <TouchableOpacity style={{marginLeft: 'auto'}} onPress={() => this.setState({
                            like: !this.state.like
                        })}>
                            <Image source={this.state.like? require('../../assets/images/following_icon.png') : require('../../assets/images/heart_icon.png')} style={styles.likeButton}/>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.headerBottomContainer}>
                        <Text style={styles.headerTitleText}>{content.title}</Text>
                        <View style={styles.headerReviewContainer}>
                            <Image source={content.rating_image} style={styles.headerReviewImage}/>
                            <Text style={styles.headerReviewText}>{content.review} Reviews</Text>
                        </View>
                    </View>
                </ImageBackground>

                <View style={styles.locationContainer}>
                    <View style={styles.locationInfoContainer}>
                        <Image source={require('../../assets/images/location_icon.png')}/>
                        <Text style={styles.locationText}>{content.location}</Text>
                        <TouchableOpacity style={{marginLeft: 'auto'}}>
                            <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 1}} colors={['#1E81CE', '#78B9EB']} style={styles.callButtonContainer}>
                                <Image source={require('../../assets/images/phone_icon.png')}/>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>


                </View>

                <View style={styles.descriptionContainer}>
                    <Text style={styles.descriptionTitleText}>Restaurant Description</Text>
                    <Text style={styles.descriptionText}>{content.description}</Text>
                </View>

                <View style={styles.promotionContainer}>
                    <Text style={styles.promotionTitleText}>Promotion</Text>
                    <View style={styles.promotions}>
                        {
                            RestaurantPromotionEntities.map((restaurantPromotion, index) => {
                                return (
                                    <RestaurantPromotionCard
                                        key={index}
                                        content={restaurantPromotion}
                                        odd={index%2}
                                    />
                                )
                            })
                        }
                    </View>

                    <TouchableOpacity style={styles.eMenuContainer}>
                        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 1}} colors={['#1E81CE', '#78B9EB']} style={styles.eMenuButton}>
                            <Text style={styles.eMenuButtonText}>View E-Menu</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>

                <View style={styles.reviewContainer}>
                    <Text style={styles.reviewTitleText}>Reviews</Text>
                    <Image source={content.rating_image} style={{marginBottom: 15}}/>
                    <Text style={styles.reviewByText}>By {content.by}</Text>
                    <Text style={styles.reviewMessageText} flexWrap='wrap'>{content.message}</Text>
                </View>

            </ScrollView>
        );
    }
}

export default RestaurantProfile;