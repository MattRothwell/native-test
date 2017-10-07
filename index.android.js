import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './app/configureStore'
import App from './app/app'

const store = configureStore()
const rmredux = () => (
    <Provider store={store}>
        <App />
    </Provider>
)
AppRegistry.registerComponent('rmredux', () => rmredux);


/* OLD COMPONENT WORK */
//Components
// import Component2 from './app/components/Component2/Component2';
// import Component1 from './app/components/Component1/Component1';

// export default class reactnative extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//           <Component1 />
//           <Component2 />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         justifyContent: 'center',
//     },
// })

// AppRegistry.registerComponent('reactnative', () => reactnative);

