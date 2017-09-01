import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

import {
  TabNavigator,
  TabBarBottom,
} from 'react-navigation';

import {
  Button,
} from 'antd-mobile';

import HomeScreen from './pages/HomePage';
import MineScreen from './pages/MinePage';

import homeO from './img/home-o.png';
import home from './img/home.png';

//底部导航栏
const Tab = TabNavigator({
    Home: {
      //screen：对应界面名称，需要填入import之后的页面，可以在其他页面通过这个screen传值和跳转。
      screen: HomeScreen,
      //配置TabNavigator的一些属性
      navigationOptions: ({navigation}) => ({
        //设置标签栏的title
        tabBarLabel: '首页',
        //设置标签栏的图标。需要给每个都设置
        tabBarIcon: ({focused,tintColor}) => (
          //focused是否选中标签
          //tintColor选中时的颜色
          <Image
            source={focused ? home : homeO}
            style={styles.icon}
          />
        )
      }),
    },
    Mine: {
      screen: MineScreen,
      navigationOptions: ({navigation}) => ({
        tabBarLabel: '我',
        tabBarIcon: ({focused,tintColor}) => (
          //focused是否选中标签
          //tintColor选中时的颜色
          <Image
            source={focused ? home : homeO}
            style={styles.icon}
          />
        )
      }),
    },
  },
  {
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    animationEnabled: false,
    lazy: true,
    tabBarOptions: {
      activeTintColor: '#06c1ae',
      inactiveTintColor: '#979797',
      style: { backgroundColor: '#ffffff' },
      labelStyle: {
        fontSize: 14, // 文字大小
      },
    }
  }
);

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <Tab />
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 20,
    height: 20,
  }
});

export default App;
