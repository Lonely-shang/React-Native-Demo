import {StyleSheet} from 'react-native';

import { screenSize } from '../../utils/tools'

const styles = StyleSheet.create({
	courseList: {
		width: screenSize.width
	},
	courseItem: {
		height: 80,
		marginTop: 10,
		flexDirection: 'row',
		backgroundColor: '#fff',
		borderBottomColor: '#eee',
	},
	firstCourseItem: {
		marginTop: 0,
	},
	imgView: {
		width: 142,
		height: 80,
	},
	infoView: {
		position: 'absolute',
		top: 0,
		left: 0,
		width: screenSize.width,
		height: 80,
		paddingLeft: 152,
		paddingTop: 10,
		paddingBottom: 10,
	},
	courseName: {
		fontSize: 13,
		lineHeight: 20
	},
	price: {
		fontSize: 15,
		color: '#f40',
		marginTop: 5
	}
});

export default styles;
