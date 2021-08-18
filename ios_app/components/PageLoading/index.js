'use strict';

import React, { Component } from 'react';

import {
  View,
  Image
} from 'react-native';

import styles from './styles'

class PageLoading extends Component {
  render() {
    return (
      <View style={styles.loadingView}>
      	<Image
      	  style={ styles.loadingPic }
      	  source={ require('../../assets/loading.gif') }
      	/>
      </View>
    );
  }
}



export default PageLoading;