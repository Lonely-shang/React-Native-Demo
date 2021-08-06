'use strict';

import React, {Component} from 'react';

import {StyleSheet, View, Text} from 'react-native';

import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from './pages/LoginScreen';


const Stack = createStackNavigator();

class TxClass extends Component {
	render() {
		return (
		<NavigationContainer>
			<Stack.Navigator  initialRouteName="LoginPage">
				<Stack.Screen
					name="LoginScreen"
					component={LoginScreen}
					options={{title: '登录', headerShown: false}}
				/>
			</Stack.Navigator>
			</NavigationContainer>
		);
	}
}


export default TxClass;
