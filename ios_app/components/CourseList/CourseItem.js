'use strict';

import React, {Component} from 'react';

import {
	View,
	Text,
	Image,
	TouchableWithoutFeedback
} from 'react-native';
import { directToPage } from '../../utils/ext'

class CourseItem extends Component {
	render() {

		const { data, styles, index, navigation } = this.props;

		return (
			<TouchableWithoutFeedback
				onPress={() => directToPage(navigation, 'Detail', {id: data.id})}
			>
				<View style={[ styles.courseItem, index === 0 && styles.firstCourseItem ]}>
					<View style={styles.imgView}>
						<Image style={ styles.imgView } source={{uri: data.img }} />
					</View>
					<View style={ styles.infoView }>
						<Text style={ styles.courseName } numberOfLines={2}>{ data.course_name }</Text>
						<Text style={ styles.price }>{ data.price == 0 ? '免费' : `¥${ data.price }.00` }</Text>
					</View>		
				</View>
			</TouchableWithoutFeedback>
		);
	}
}

export default CourseItem;
