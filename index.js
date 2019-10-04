/**
 * @format
 */

// import {AppRegistry} from 'react-native';
// // import App from './src/app1/app-config/App';
// // import App from './src/app2/components/login';
// // import App from './src/app2/store';
// // import App from './src/redux_saga/app1/store'
// // import App from './src/saga_GET_movies/store';
// // import App from './src/saga_PUT/store';
// // import App from './src/redux_saga/redux_saga_test1/store';
// // import App from './src/redux_saga/redux_saga_navigate/store';
// import App from './src/redux_saga/app2/store';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);

import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import App from './App';

AppRegistry.registerComponent(appName, () => App);
