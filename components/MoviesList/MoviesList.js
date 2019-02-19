
// @flow
import React, { Component } from 'react';
import { View, Text, ActivityIndicator, FlatList, RefreshControl  } from 'react-native';

import MovieThumb from './../MovieThumb';

import style from './style';

type Props = {
};
type State = {};

class MoviesList extends Component<Props, State> {
  state = {
    page: 1,
  };

  renderMovieThumbNail = ({ item }, index) => (
    <MovieThumb key={item.imdbID} {...item} />
  );

  keyExtractor = (item, index) => item.imdbID;

  onEndReached = () => {
    
    this.props.loadMore();
  }

  onRefresh = () => {
    this.setState({refreshing: true});
    
    console.log('refreshing');
    // var randomIndex = Math.floor(Math.random() * this.props.data.lenght);
    // var item = this.props.data.splice(randomIndex, 1);
    // item.updated = new Date();
    // this.props.data.unshift(item);

    var item = {
			"Title": "Title" + Math.random() * 10000,
			"Year": 1900 + Math.random() * 120,
			"imdbID": "tt" + Math.random() * 1000000,
      "Type": "movie",
      updated: new Date
    };
    this.props.data.unshift(item);

    this.setState({refreshing: false});
  }

  render() {
    const { data, loading } = this.props;
    return (
      <View style={{flex: 1}}>
        <FlatList
          data={data}
          scrollable
          keyExtractor={this.keyExtractor}
          renderItem={this.renderMovieThumbNail}
          onEndReached={this.onEndReached}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this.onRefresh}
            />
          }
        />
        </View>
    );
  }
}

export default MoviesList;
