'use strict';

import React, { Component } from 'react';

import { WebView } from 'react-native-webview';

const Detail = ({navigation, route})=> {
  const { params } = route;
  return (
  	<WebView
  		source={{ url: 'https://ke.qq.com/course/' + params.id }}
  		startInLoadingState={ true }
  	/>
  );
};


export default Detail;