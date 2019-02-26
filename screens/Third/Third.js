
// @flow
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

import sharedStyle from './../../shared/style';
import style from './style';

type Props = {};
type State = {};

class Third extends Component<Props, State> {
  state = {
    imageUri: 'https://www.companyshop.co.uk/media/1017/media-placeholder.jpg',
  };

  pickImage = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
      console.log(image);
      this.setState({ imageUri: image.path });
    });
  }

  render() {
    return (
      <View style={sharedStyle.container}>
        <TouchableOpacity
            onPress={this.pickImage}
            style={style.button}>
          <Text style={style.buttonLabel}>Pick image</Text>
        </TouchableOpacity>
        <Image
          style={style.image}
          source={{ uri: this.state.imageUri }}
          resizeMode="contain"
        />
      </View>
    );
  }
}

export default Third;
