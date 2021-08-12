'use strict';

import React, { Component } from 'react';

import {
  View,
} from 'react-native';

import RecomeCourseItem from './RecomeCourseItem'

import styles from './styles'

class RecomCourseContent extends Component {
  render() {

  	const { recomCoursesData, navigation } = this.props; 

    return (
      <View
      	style={ styles.recomContent }
      >
      	{
      		recomCoursesData.map((item, index) => {

      			return (
      				<RecomeCourseItem
      					key={ index }
      					data={ item }
      					styles={ styles }
      					navigation={ navigation }
      				/>
      			)

      		})
      	}
      </View>
    );
  }
}


export default RecomCourseContent;