/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import Constants from 'expo-constants';
console.log('Expo Constants:', Constants.systemFonts);
AppRegistry.registerComponent(appName, () => App);
