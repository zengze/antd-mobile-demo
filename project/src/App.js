import React, { Component } from 'react';

import {
  StyleSheet,
  Image,
} from 'react-native';

import {
  TabNavigator,
  TabBarBottom,
} from 'react-navigation';

import HomeScreen from './pages/HomePage';
import MineScreen from './pages/MinePage';
import XiaoScreen from './pages/XiaoPage';

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
            style={styles.icon}
            source={focused ? home : homeO}
          />
        )
      }),
    },
    Xiao: {
      screen: XiaoScreen,
      navigationOptions: ({navigation}) => ({
        tabBarLabel: '肖',
        tabBarIcon: ({focused,tintColor}) => (
          //focused是否选中标签
          //tintColor选中时的颜色
          <Image
            style={styles.icon}
            source={focused ? home : homeO}
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
            style={styles.icon}
            source={focused ? home : homeO}
          />
        )
      }),
    },
  },
  {
    tabBarComponent: TabBarBottom,
    //设置tabbar的位置，iOS默认在底部，安卓默认在顶部。（属性值：'top'，'bottom'）
    tabBarPosition: 'bottom',
    //是否允许在标签之间进行滑动
    swipeEnabled: true,
    //是否在更改标签时显示动画
    animationEnabled: false,
    //是否根据需要懒惰呈现标签，而不是提前，意思是在app打开的时候将底部标签栏全部加载，默认false,推荐为true
    lazy: true,
    //tabBarOptions：配置标签栏的一些属性iOS属性
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
