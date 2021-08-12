import {StyleSheet} from 'react-native';

import { screenSize } from '../../utils/tools'

const styles = StyleSheet.create({
	swiperItem: {
		width: screenSize.width,
		height: screenSize.width * 360 / 1200,
	}
});

export default styles;
