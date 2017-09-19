import React,  { Component } from 'react';

import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const marginTop = Platform.OS === 'ios' ? 20 : 0;

export default class HomePage extends Component {

  _skip() {
    this.props.navigation.navigate("Mine");
  }

  render() {

    return (
      <View style={styles.container}>
        <Text onPress={this._skip.bind(this)}>点击跳转</Text>
        <View style={styles.context}>
          <Text>
            我是首页
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: marginTop,
  },
  context: {
    flex: 1,
    // 设置主轴对齐方式
    justifyContent: 'center',
    // 设置侧轴对齐方式
    alignItems: 'center',
  }
});
