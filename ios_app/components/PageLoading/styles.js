import {StyleSheet} from 'react-native';

import { screenSize } from '../../utils/tools'

const styles = StyleSheet.create({
	loadingView: {
		width: screenSize.width,
		height: screenSize.height - 208,
		justifyContent: 'center',
		alignItems: 'center',
	},
	loadingPic: {
		height: 40,
		width: 40,
	}
});

export default styles;
