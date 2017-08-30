import React,  { Component } from 'react';

import {
  Platform,
  Text,
  View,
} from 'react-native';

export default class HomePage extends Component {

  _skip() {
    this.props.navigation.navigate("Mine");
  }

  render() {

    let marginTop = Platform.OS === 'ios' ? 20 : 0;

    return(
      <View style={{ flex:1, marginTop: marginTop }}>
        <Text onPress={this._skip.bind(this)}>点击跳转</Text>
      </View>
    );
  }
}
