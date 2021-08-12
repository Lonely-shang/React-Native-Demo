import {StyleSheet} from 'react-native';
import { screenSize } from '../../utils/tools'

const styles = StyleSheet.create({
	recomContent: {
		flexDirection: 'row',
	},
	itemContent: {
		width: screenSize.width / 2 - 10,
		backgroundColor: '#fff',
		borderBottomColor: '#eee',
		marginLeft: 5,
		marginRight: 5,
		padding: 5,
	},
	imageView: {
		width: screenSize.width / 2 - 20,
		height: (screenSize.width / 2 - 20) * 1080 / 1920
	},
	courseNameView: {
		paddingTop: 3,
		paddingBottom: 3,
	},
	courseNameText: {
		fontSize: 12,
	},
	teacherInfo: {
		flexDirection: 'row',
	},
	teacherImg: {
		height: 27,
		width: 27,
		borderRadius: 14,
	},
	teacherText: {
		fontSize: 13,
		lineHeight: 27,
		paddingLeft: 5
	},
	priceView: {
		paddingTop: 3,
		paddingLeft: 4,
	},
	priceText: {
		color: 'red'
	}
});

export default styles;
