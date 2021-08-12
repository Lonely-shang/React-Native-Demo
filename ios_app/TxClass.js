'use strict';

import React, {Component} from 'react';

import {StyleSheet, View, Text, Button} from 'react-native';

import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons';

import LoginScreen from './pages/LoginScreen';
import HomeScreen from './pages/Home';
import ListScreen from './pages/List';

import Logo from './components/Logo';

const Stack = createStackNavigator();


function BottomTab () {
	const Tab = createBottomTabNavigator();

	return (
		<Tab.Navigator 

			screenOptions={({route}) => ({
				tabBarIcon: ({focused, size, color}) => {
					let iconName;
					switch (route.name) {
						case '首 页':
							iconName = 'ios-home';
							break;
						case '列 表':
							iconName = 'ios-list';
							break;
						default: 
							iconName = 'planet'
					}
					return <Ionicons name={iconName} size={size} color={color}/>
				},

      	// tabBarActiveTintColor:"",//活跃状态的label和icon颜色
		    // tabBarActiveBackgroundColor:"red",//活跃状态的tab背景色
	    	tabBarInactiveTintColor:"#000",//非活跃状态的label和icon颜色
	    	// tabBarInactiveBackgroundColor:"yellow",//非活跃状态的tab背景色
	    	tabBarShowLabel: true,//是否显示tab上的文字，默认true
		    tabBarShowIcon: true,//是否显示tab上的icon，默认true
    		tabBarStyle: {//tabBar的样式
		    	// backgroundColor: 'yellow'
		    },
		    tabBarLabelStyle:{//tabBar上label的样式
		    },
	    	tabBarTabStyle:{//tabBar上tab的样式
	    	},
	    	tabBarAllowFontScaling:false,//
			})}
			
		>
			<Tab.Screen 
				name="首 页"
				component={HomeScreen}
				options={{
					tabBarBadge: 3,
					headerShown: false,
				}}	
			/>
			<Tab.Screen 
				name="列 表"
				component={ListScreen}
			/>
		</Tab.Navigator>
	)
}


class TxClass extends Component {

	render() {
		return (
		<NavigationContainer>
			<Stack.Navigator  initialRouteName="BottomTab">
				<Stack.Screen
					name="BottomTab"
					component={BottomTab}
					options={{

						headerTitle: props => <Logo {...props} />,
	          headerRight: () => (
		          <Button
	              onPress={() => alert('This is a button2!')}
	              title="Info2"
	              color="#000"
	            />
	          ),
					}}
				/>
				<Stack.Screen
					name="Detail"
					component={LoginScreen}
					options={{
						title: '登录', 
						headerBackTitle: '返回',
						headerShown: true
					}}
				/>
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
