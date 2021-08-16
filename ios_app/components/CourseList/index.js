'use strict';

import React, {Component} from 'react';

import {View} from 'react-native';
import CourseItem from './CourseItem'
import styles from './styles'
class CourseList extends Component {
	render() {

		const { coursesData, navigation } = this.props;
		return (
			<View style={ styles.courseList }>
				{
					coursesData.map((item, index) => {
						return (
							<CourseItem
								key={ index }
								data={ item }
								index={ index }
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

export default CourseList;
