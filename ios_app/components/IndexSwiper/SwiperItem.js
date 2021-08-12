'use strict';

import React, { Component } from 'react';

import {
  Image,
  TouchableWithoutFeedback,
} from 'react-native';

import { directToPage } from '../../utils/ext'

class SwiperItem extends Component {
  render() {

  	const { data, styles, navigation } = this.props;

    return (
      <TouchableWithoutFeedback
      	style={styles.swiperItem}
      	onPress={() => directToPage(navigation, 'Detail', {id: data.course_id})}
      >
      	<Image
      	  style={styles.swiperItem}
      	  source={{uri: data.img}}
      	/>
      	
      </TouchableWithoutFeedback>
    );
  }
}


export default SwiperItem;