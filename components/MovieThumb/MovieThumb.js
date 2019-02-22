
// @flow
import React, { Component } from 'react';
import { View, Text, Image, Button, TouchableOpacity } from 'react-native';

import style from './style';

type Props = {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
};
type State = {};

class MovieThumb extends Component<Props, State> {
  render() {
    const { Title, Poster, updated } = this.props;
    return (
      <View>
      <TouchableOpacity style={style.container} onPress={() => this.props.navigation.navigate('Details', this.props)}>
        <Image
          style={style.image}
          source={{ uri: Poster }}
          resizeMode="contain"
          
        />
        </TouchableOpacity>
        <Text>{Title}</Text>
      </View>
    );
  }
}

export default MovieThumb;
