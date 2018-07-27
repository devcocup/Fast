import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    Image
} from 'react-native';

import { SearchBar } from 'react-native-elements'
import styles from './style';

class Search extends Component {

    constructor (props) {
        super(props)
        
        this.state = {
            food_category: false,
            search_popular: true
        }
    }

    pressPopular() {
        this.setState({
            food_category: false,
            search_popular: true
        })
    }

    pressCategory() {
        this.setState({
            food_category: true,
            search_popular: false
        })
    }

    render() {
        const NavigationAction = this.props.navigation;
        return (
            <View style={styles.container}>
                <View style={styles.searchBarContainer}>
                    <TouchableOpacity style={styles.backButton} onPress={() => NavigationAction.goBack()}>
                        <Image source={require('../../assets/images/black_back_icon.png')} />
                    </TouchableOpacity>

                    <SearchBar 
                        lightTheme 
                        containerStyle={styles.searchBar}
                        inputContainerStyle={styles.searchBarInput}
                        placeholder="Search"
                        searchIcon={{size: 40}}
                    />
                </View>

                <View style={styles.buttonsContainer}>
                    <TouchableOpacity style={[styles.buttonContainer, {backgroundColor: '#FFC117'}]} onPress={() => this.pressPopular()}>
                        <Image source={require('../../assets/images/search_popular_icon.png')}/>
                        <Text style={styles.buttonText}>Popular</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.buttonContainer, {backgroundColor: '#5773FF'}]} onPress={() => this.pressCategory()}>
                        <Image source={require('../../assets/images/search_category_icon.png')}/>
                        <Text style={styles.buttonText}>Food Category</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.buttonContainer, {backgroundColor: '#665EFF'}]} onPress={() => NavigationAction.navigate('NearByTab')}>
                        <Image source={require('../../assets/images/search_nearby_icon.png')}/>
                        <Text style={styles.buttonText}>NearBy</Text>
                    </TouchableOpacity>
                </View>

                {
                    this.state.search_popular && (
                        <View style={styles.bodyContainer}>
                            <Text style={styles.titleText} flexWrap="wrap">Popular Searches</Text>    
                            <View style={styles.popularContainer}>
                                <TouchableOpacity style={styles.popularButtonContainer}>
                                    <Text>Sushi</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.popularButtonContainer}>
                                    <Text>Frog porridge</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )
                }

                {
                    this.state.food_category && (
                        <View style={styles.subCategorysContainer}>
                            <TouchableOpacity style={styles.subCategoryContainer} onPress={() => NavigationAction.navigate('Category', {title: 'Chinese Cuisine', startColor: '#FF416C', endColor: '#EF7676'})}>
                                <Image source={require('../../assets/images/home_chinese.png')} style={styles.subCategoryImage} borderRadius={10}/>
                                <Text style={styles.subCategoryText}>Chinese</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.subCategoryContainer} onPress={() => NavigationAction.navigate('Category', {title: 'Western Cuisine', startColor: '#3466BB', endColor: '#4897E6'})}>
                                <Image source={require('../../assets/images/home_western.png')} style={styles.subCategoryImage} borderRadius={10}/>
                                <Text style={styles.subCategoryText}>Western</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.subCategoryContainer} onPress={() => NavigationAction.navigate('Category', {title: 'Muslim Cuisine', startColor: '#29C129', endColor: '#74FF6A'})}>
                                <Image source={require('../../assets/images/home_muslim.png')} style={styles.subCategoryImage} borderRadius={10}/>
                                <Text style={styles.subCategoryText}>Muslim</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.subCategoryContainer} onPress={() => NavigationAction.navigate('Category', {title: 'Japanese Cuisine', startColor: '#FF3131', endColor: '#FFB267'})}>
                                <Image source={require('../../assets/images/home_japanese.png')} style={styles.subCategoryImage} borderRadius={10}/>
                                <Text style={styles.subCategoryText}>Japanese</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.subCategoryContainer} onPress={() => NavigationAction.navigate('Category', {title: 'Indian Cuisine', startColor: '#E16900', endColor: '#FFB73A'})}>
                                <Image source={require('../../assets/images/home_indian.png')} style={styles.subCategoryImage} borderRadius={10}/>
                                <Text style={styles.subCategoryText}>Indian</Text>
                            </TouchableOpacity>
                        </View>
                    )
                }
            </View>
        );
    }
}

export default Search;