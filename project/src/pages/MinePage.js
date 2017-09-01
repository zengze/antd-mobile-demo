import React,  { Component } from 'react';

import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class MinePage extends Component {

  _skip() {
    this.props.navigation.goBack();
  }

  render() {

    let marginTop = Platform.OS === 'ios' ? 20 : 0;

    return(
      <View style={{ flex: 1, marginTop: marginTop }}>
        <Text onPress={this._skip.bind(this)}>返回上一界面</Text>
        <Text style={{ textAlign: 'center' }}>
          我是我
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});
