
// @flow
import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

import style from './style';

type Props = {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
  updated: Date;
};
type State = {};

class MovieThumb extends Component<Props, State> {
  render() {
    const { Title, Poster, updated } = this.props;
    return (
      <View style={style.container}>
        <Image
          style={style.image}
          source={{ uri: Poster }}
          resizeMode="contain"
        />
        <Text>{Title}</Text>
        {updated && <Text>{updated.toString()}</Text>}
      </View>
    );
  }
}

export default MovieThumb;
