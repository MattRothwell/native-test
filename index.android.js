import React from 'react';
import {
	AppRegistry,
} from 'react-native';
import { Provider } from 'react-redux';
//var configureStore = require('./app/configureStore');
import configureStore from './app/configureStore'
import App from './app/app'

const store = configureStore()

const reactnative = () => (
	<Provider store={store}>
		<App />
	</Provider>
)

AppRegistry.registerComponent('reactnative', () => reactnative);

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

