'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  Dimensions
} from 'react-native';

class LoginScreen extends Component {
  render() {
    return (
      <View style={loginStyles.login}>
      	<Text style={loginStyles.text}>
      		登 陆
      	</Text>
      </View>
    );
  }
}

const loginStyles = StyleSheet.create({
	login: {
		justifyContent: 'center',
		alignItems: 'center',
		height: Dimensions.get('window').height,
		backgroundColor: 'yellow'
	},
	text: {
		fontWeight: '600',
		fontSize: 26,
	}
});


export default LoginScreen;