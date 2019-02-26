
// @flow
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator, SafeAreaView, Button, TextInput } from 'react-native';

import MoviesList from './../../components/MoviesList';
import Second from '../Second/Second';

import { fetchMovies } from './../../api';

import sharedStyle from './../../shared/style';
import style from './style';

const fakeTimeout = 2000;

type Props = {};
type State = {};

class Feed extends Component<Props, State> {
  state = {
    loading: false,
    data: null,
    page: 1,
    filterText: null,
  };

  componentDidMount() {
    // this.loadMovies();
  }

  loadMovies = () => {
    this.setState({ loading: true });
    
    fetchMovies(this.state.page, this.state.filterText)
      .then(res => new Promise(resolve => setTimeout(() => resolve(res), fakeTimeout)))
      .then(res => {
        if (this.state.data) {
          this.state.data.push(...res)
        } else {
          this.setState({ data: res });
        }
        this.setState({ loading: false });
      })
      .catch(err => {
        console.error(err);
        this.setState({ loading: false });
      });
  };

  loadMore = () => {
    this.setState((state) => ({ page: state.page + 1}), this.loadMovies);
  };

  refreshMoviesAsync = () => {
    this.setState({ page: 1 });

    return fetchMovies(1, this.state.filterText)
    .then(res => this.setState({ data: res }));
  }

  render() {
    const { loading, data } = this.state;

    return (
      <SafeAreaView style={{ backgroundColor: 'white', borderWidth: 1, borderColor: 'red', flex: 1 }}>
        {loading && (
          <Second/>
        )}
        {!data && !loading && (
          <View>  
            <TextInput
              style={{height: 40}}
              placeholder="Type text to filter"
              onChangeText={(text) => this.setState({ filterText: text })}
            />
            <TouchableOpacity
              onPress={this.loadMovies}
              style={style.button}
            >
              <Text style={style.buttonLabel}>Find Stuff</Text>
            </TouchableOpacity>
          </View>
        )}
        {data && !loading && (
        <MoviesList
          loadMore={this.loadMore}
          loading={loading}
          data={data}
          navigation={this.props.navigation}
          refreshAsync={this.refreshMoviesAsync}
        />)}
      </SafeAreaView>
    );
  }
}

export default Feed;
