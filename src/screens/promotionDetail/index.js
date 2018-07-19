import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    Image
} from 'react-native';

import styles from './style.js';


class PromotionDetail extends Component {

    render() {
        const NavigationAction = this.props.navigation;
        const content = NavigationAction.getParam('content')

        return (
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <TouchableOpacity style={styles.backButton} onPress={() => NavigationAction.goBack()}>
                        <Image source={require('../../assets/images/black_back_icon.png')} />
                    </TouchableOpacity>

                    <Text style={styles.headerText}>Promotion Detail</Text>

                    <TouchableOpacity style={styles.downloadButton} onPress={() =>{}}>
                        <Image source={require('../../assets/images/download_icon.png')}/>
                    </TouchableOpacity>
                </View>
            
                <ScrollView>
                    <View style={styles.bodyContainer}>
                        <Image source={content.image} style={styles.imageStyle}/>

                        <View style={styles.infoContainer}>
                            <Text style={styles.dateText}>{content.date}</Text>
                            <Text style={styles.titleText}>{content.title}</Text>
                            <Text style={styles.categoryText}>{content.category}</Text>
                            <Text style={styles.descriptionText}>{content.description}</Text>

                            <View style={styles.termsContainer}>
                                <Text style={styles.termsTitleText}>Terms & Conditions</Text>
                                {
                                    content.terms.map((term, index) => {
                                        return (
                                            <Text style={styles.termText}>{term}</Text>
                                        )
                                    })
                                }

                                {
                                    content.others.map((other, index) => {
                                        return (
                                            <Text style={styles.otherText}>{other}</Text>
                                        )
                                    })
                                }
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

export default PromotionDetail;