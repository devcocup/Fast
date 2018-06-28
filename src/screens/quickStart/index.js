import React, { Component } from 'react';
import {
    Text,
    TextInput,
    View,
    TouchableOpacity,
    Dimensions
} from 'react-native';

import { Actions as NavigationActions } from 'react-native-router-flux';
import Carousel, { Pagination } from 'react-native-snap-carousel';

import Constants from '../../Lib/Constants';
import QuickStartCard from './QuickStartCard';

import styles from './style.js';

const {height, width} = Dimensions.get('window')
const { GetStartEnties } = Constants

class QuickStart extends Component {

    constructor (props) {
        super(props);

        this.state = {
            activeSlide: 0
        }
    }

    back() {
        if (this.state.activeSlide > 0) {
            this.setState({
                activeSlide: this.state.activeSlide - 1
            })
            this.carousel.snapToPrev()
        }
    }

    next() {
        if (this.state.activeSlide < 3) {
            this.setState({
                activeSlide: this.state.activeSlide + 1
            })
            this.carousel.snapToNext()
        }
    }

    _renderItem ({item, index}) {
        return (
            <QuickStartCard content={item}/>
        )
    }

    render() {
        const { activeSlide } = this.state;
        return (
            <View style={styles.container}>
                <Carousel
                    ref={(c) => this.carousel = c}
                    data={GetStartEnties}
                    renderItem={this._renderItem}
                    onSnapToItem={(index) => this.setState({activeSlide: index})}
                    sliderWidth={width}
                    itemWidth={width * 0.7}
                />

                <Pagination
                    dotsLength={GetStartEnties.length}
                    activeDotIndex={activeSlide}
                    containerStyle={{ backgroundColor: 'transparent', paddingVertical: 20 }}
                    dotStyle={{
                        width: 10,
                        height: 10,
                        borderRadius: 5,
                        marginHorizontal: 3,
                        backgroundColor: '#424960'
                    }}
                    inactiveDotOpacity={0.4}
                    inactiveDotScale={0.6}
                />

                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.backButton} onPress={() => this.back()}>
                        <Text style={{'fontSize': 15}}>BACK</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.nextButton} onPress={() => this.next()}>
                        <Text style={{'color': 'white', 'fontSize': 15}}>NEXT</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default QuickStart;