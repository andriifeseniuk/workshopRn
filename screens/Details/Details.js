import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Details extends Component {
    render() {
        return (
            <View>
                <Text>Movie details</Text>
                <Text>Poster: {this.props.navigation.getParam('Poster', '<no Poster>')}</Text>
                <Text>Title: {this.props.navigation.getParam('Title', '<no Title>')}</Text>
                <Text>Type: {this.props.navigation.getParam('Type', '<no Type>')}</Text>
                <Text>Year: {this.props.navigation.getParam('Year', '<no Year>')}</Text>
                <Text>imdbID: {this.props.navigation.getParam('imdbID', '<no imdbID>')}</Text>
            </View>
        );
    }
}

export default Details;