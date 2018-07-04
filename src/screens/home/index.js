import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Image,
    ScrollView
} from 'react-native';

import { Actions as NavigationActions } from 'react-native-router-flux';
import DailyDealCard from './DailyDealCard';
import Constants from '../../Lib/Constants';

import styles from './style.js';

const { DailyDeals } = Constants;

class Home extends Component {
    render() {
        return (
            <ScrollView style={styles.container}>
                {/* <View style={styles.headerContainer}>
                    <TouchableOpacity>
                        <Image source={require('../../assets/images/menu_icon.png')} style={styles.menuButton}/>
                    </TouchableOpacity>
                    <Text style={styles.headerText}>Hello, Tommy</Text>
                    <TouchableOpacity>
                        <Image source={require('../../assets/images/search.png')} style={styles.searchButton}/>
                    </TouchableOpacity>
                </View>

                <View style={styles.bodyContainer}>
                    <View style={styles.topContainer}>
                        <View>
                            <Image source={require('../../assets/images/weather.png')} style={styles.weatherImage}/>
                            <Text style={styles.countryText}>Singapore</Text>
                        </View>

                        <View style={styles.timeContainer}>
                            <View style={{flexDirection: 'column'}}>
                                <Text style={styles.timeText}>11:30</Text>
                                <Text style={{fontSize: 15, marginLeft: 5}}>AM</Text>
                            </View>
                            <Text>Lunchtime</Text>
                        </View>

                        <View>
                            <Image source={require('../../assets/images/settings.png')}/>
                        </View>
                    </View>

                    <View>
                        <Image source={require('../../assets/images/home_big_path.png')}/>
                        <Image source={require('../../assets/images/home_small_path.png')}/>
                        
                        <View>
                            <View>
                                <Image source={require('../../assets/images/scan.png')}/>
                                <Text>Scan</Text>
                            </View>

                            <View>
                                <Image source={require('../../assets/images/queue.png')}/>
                                <Text>Queue</Text>
                            </View>

                            <View>
                                <Image source={require('../../assets/images/order.png')}/>
                                <Text>My Order</Text>
                            </View>

                            <View>
                                <Image source={require('../../assets/images/nearby.png')}/>
                                <Text>Nearby</Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View>
                    <View>
                        <View></View>
                        <Text>e-Payment</Text>
                    </View>
                    <View>
                        <Image source={require('../../assets/images/dbs.png')}/>
                        <Image source={require('../../assets/images/fast.png')}/>
                        <Image source={require('../../assets/images/grab.png')}/>
                    </View>
                </View>

                <View>
                    <View></View>
                    <Text>Category</Text>
                    <View>
                        <Image source={require('../../assets/images/popular.png')}/>
                        <Image source={require('../../assets/images/chinese.png')}/>
                        <Image source={require('../../assets/images/western.png')}/>
                        <Image source={require('../../assets/images/halal.png')}/>
                        <Image source={require('../../assets/images/japanese.png')}/>
                        <Image source={require('../../assets/images/indian.png')}/>
                        <Image source={require('../../assets/images/more.png')}/>
                    </View>
                </View>

                <View>
                    <View></View>
                    <Text>Daily Deal</Text>
                    {
                        DailyDeals.map((dailydeal, index) => {
                            return (
                                <DailyDealCard
                                    key={index}
                                    content={dailydeal}
                                />
                            )
                        })
                    }
                </View> */}
            </ScrollView>
        );
    }
}

export default Home;