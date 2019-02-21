
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
    
    this.updated = new Date();

    this.setState({refreshing: false});
  }

  render() {
    const { data, loading } = this.props;
    return (
      <View style={{flex: 1}}>
        {this.updated && (<Text>{this.updated.toTimeString()}</Text>)}
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
