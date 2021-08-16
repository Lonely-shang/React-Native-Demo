'use strict';

import React, { Component } from 'react';

import {
  View,
  ScrollView
} from 'react-native';

import styles from './styles'

import TabItem from './TabItem'

class index extends Component {

  render() {

  	const {
  					curIndex,
  					checkTabItem,
  					courseFieldData
  				} = this.props;
    return (
      <View style={ styles.itemContent }>
      	<ScrollView
      		showsHorizontalScrollIndicator={ false }
      		horizontal={ true }
      	>
      	  {
      	  	courseFieldData.map( (item, index) => {
      	  		return (
      	  			<TabItem
      	  				key={ index }
      	  				data={ item }
      	  				index={ index }
      	  				checkTabItem={ checkTabItem }
      	  				curIndex={ curIndex }
      	  				styles={ styles }
      	  			/>
      	  		);	
      	  	})
      	  }
      	</ScrollView>
      </View>
    );
  }
}


export default index;