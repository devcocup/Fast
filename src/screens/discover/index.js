import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    ImageBackground,
    Image
} from 'react-native';

import PromotionCard from '../home/PromotionCard';
import SuggestionCard from '../home/SuggestionCard';
import PickCard from './PickCard';
import FoodBloggerCard from './FoodBloggerCard';

import Constants from '../../Lib/Constants';
import styles from './style.js';

const { Promotions, Suggestions, PickEntities, BloggerEntities } = Constants

class Discover extends Component {

    constructor (props) {
        super(props);

        this.state = {
            is_open: false,
            selected: Array(BloggerEntities.length).fill(false)
        }
    }

    componentWillMount() {
        
    }

    openSubCategory() {
        this.setState({
            is_open: !this.state.is_open
        })
    }

    showDetail = (index) => {
        var tmp = this.state.selected
        tmp[index] = !tmp[index]
        this.setState({
            selected: tmp
        })
    }

    render() {
        const NavigationAction = this.props.navigation;
        return (
            <View style={styles.container}>
                <View style={styles.navigationBarContainer}>
                    <View style={{marginRight: 'auto', flexDirection: 'row'}}>
                        <TouchableOpacity style={styles.backButton} onPress={() => NavigationAction.goBack()}>
                            <Image source={require('../../assets/images/black_back_icon.png')} />
                        </TouchableOpacity>

                        <Text style={styles.navigationBarText}>Home</Text>
                    </View>

                    <TouchableOpacity style={styles.searchButton}>
                        <Image source={require('../../assets/images/search_icon.png')} />
                    </TouchableOpacity>
                </View>

                <ScrollView>
                    <ImageBackground source={require('../../assets/images/discover_background.png')} style={styles.headerContainer}>
                        <Text style={styles.headerText}>Discover Singapore</Text>
                    </ImageBackground>

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
                            <Text style={styles.modalHeaderTitleText}>Today's Recommendation</Text>
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

                    <View style={{marginTop: 30}}>
                        <View style={styles.modalHeader}>
                            <Text style={styles.modalHeaderTitleText}>SG's Food Blogger Recommendation</Text>
                            <TouchableOpacity>
                                <Text style={styles.moreText}>More ></Text>
                            </TouchableOpacity>
                        </View>

                        <ScrollView horizontal={true} style={{marginTop: 10}}>
                            {
                                BloggerEntities.map((entity, index) => {
                                    return (
                                        <FoodBloggerCard key={index * 10 + 1} content={entity} selected={this.state.selected[index]} onPress={() => this.showDetail(index)}/>
                                    )
                                })
                            }
                        </ScrollView>
                    </View>

                    <View style={{marginTop: 30}}>
                        <View style={styles.modalHeader}>
                            <Text style={styles.modalHeaderTitleText}>Top Pick</Text>
                            <TouchableOpacity>
                                <Text style={styles.moreText}>More ></Text>
                            </TouchableOpacity>
                        </View>

                        <ScrollView horizontal={true} style={{marginTop: 10, marginBottom: 20}}>
                            {
                                PickEntities.map((entity, index) => {
                                    return (
                                        <PickCard key={index * 100 + 2} content={entity}/>
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