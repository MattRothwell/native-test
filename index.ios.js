import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

//Components
import Component1 from './app/components/Component1/Component1';

export default class reactnative extends Component {
  render() {
    return (
      <View>
          <Component1 />
      </View>
    );
  }
}

AppRegistry.registerComponent('reactnative', () => reactnative);
