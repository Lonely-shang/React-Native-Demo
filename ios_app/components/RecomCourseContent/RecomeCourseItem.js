'use strict';

import React, {Component} from 'react';

import {Text, View, Image, TouchableWithoutFeedback} from 'react-native';

import { directToPage } from '../../utils/ext'

class RecomeCourseItem extends Component {
	render() {
		const {data, styles, navigation} = this.props;

		return (
			<TouchableWithoutFeedback
				onPress={() => directToPage(navigation, 'Detail', {id: data.course_id}) }
			>
				<View style={ styles.itemContent }>
					<View style={ styles.imageView }>
						<Image style={ styles.imageView } source={{uri: data.course_img}} />
					</View>
					<View style={ styles.courseNameView }>
						<Text style={ styles.courseNameText }>{data.course_name}</Text>
					</View>
					<View style={ styles.teacherInfo }>
						<View>
							<Image style={ styles.teacherImg } source={{uri: data.teacher_img}} />
						</View>
						<View>
							<Text style={ styles.teacherText }>{data.teacher_name}</Text>
						</View>
					</View>
					<View style={ styles.priceView }>
						<Text style={ styles.priceText }>¥{data.price}.00</Text>
					</View>
				</View>
			</TouchableWithoutFeedback>
		);
	}
}

export default RecomeCourseItem;
