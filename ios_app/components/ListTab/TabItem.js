'use strict';

import React, { Component } from 'react';

import {
  View,
  Text,
  TouchableWithoutFeedback
} from 'react-native';

class TabItem extends Component {
  render() {
  	const {
  		data,
  		index,
  		styles,
  		curIndex,
  		checkTabItem
  	} = this.props;
    return (
      <View style={[ styles.tabItem, index === curIndex && styles.tabItemActive ]}>
      	<TouchableWithoutFeedback
      		onPress={() => checkTabItem(data.field ,index)}
      	>
      		<Text style={[ styles.tabItemText, index === curIndex && styles.tabItemTextActive ]}>
      		  { data.field_name }
      		</Text>
      	</TouchableWithoutFeedback>
      </View>
    );
  }
}



export default TabItem;