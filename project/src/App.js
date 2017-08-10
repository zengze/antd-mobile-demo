import React,  { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {
  TabBar,
  Icon,
  Grid,
  Button,
} from 'antd-mobile';

const TabBarItem = TabBar.Item;

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'home',
      hidden: false,
    };
  }

  _showTabBar(text) {
    return (
      <View style={styles.container}>
        <Text style={styles.instructions}>
          这是“{text}”标签
        </Text>
      </View>
    )
  }

  render() {
    const { selectedTab } = this.state;
    return (
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="white"
        hidden={this.state.hidden}
      >
        <TabBarItem
          key="home"
          title="首页"
          selected={selectedTab === 'home'}
          onPress={() => {
            this.setState({
              selectedTab: 'home',
            });
          }}
        >
          {this._showTabBar('首页')}
        </TabBarItem>
        <TabBarItem
          key="friend"
          title="好友"
          selected={selectedTab === 'friend'}
          onPress={() => {
            this.setState({
              selectedTab: 'friend',
            });
          }}
        >
          {this._showTabBar('好友')}
        </TabBarItem>
        <TabBarItem
          key="me"
          title="我的"
          selected={selectedTab === 'me'}
          onPress={() => {
            this.setState({
              selectedTab: 'me',
            });
          }}
        >
          {this._showTabBar('我的')}
        </TabBarItem>
      </TabBar>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default App;
