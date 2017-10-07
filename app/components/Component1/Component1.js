import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class Component1 extends Component {
  constructor(props){
    super(props);
    this.state = { 
      name: 'Matt', 
      showName: true,
      message: this.props.message
    }
  }

  static navigationOptions = {
    title: 'Welcome',
  };
  
  render() {
    let name = this.state.showName ? this.state.name : 'No Name'
    return (
      <Text>Hello, Naviation </Text>
    );
  }
}

const Navigation = StackNavigator({
  Home: { screen: Component1},
});

AppRegistry.registerComponent('Navigation', () => Navigation);


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  description: {
    fontSize: 24,
    textAlign: 'center',
    color: '#656565',
    marginTop: 65,
  }
});