'use strict';

import React, { Component } from 'react';

import {
  View,
  Text
} from 'react-native';

const Detail = ({navigation, route})=> {
    const { params } = route;
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>详情页面 id:{ params.id }</Text>
        </View>
    );
};


export default Detail;