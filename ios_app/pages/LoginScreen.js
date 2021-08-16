
import React from 'react';
import {Button} from 'react-native';
import {
    Text,
    View,
} from 'react-native';
 
const LoginScreen = ({navigation, route})=> {
		console.log(route.params.id);
    const { params } = route;
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>登录页面 id:{ params.id }</Text>
        </View>
    );
};
 
export default LoginScreen;
