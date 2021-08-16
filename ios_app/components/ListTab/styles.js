import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
	itemContent: {
		height: 38,
		backgroundColor: '#fff',
		borderBottomColor: '#eee',
	},
	tabItem: {
		height: 38,
		alignItems: 'center',
		justifyContent: 'center',
		paddingLeft: 20,
		paddingRight: 20,
		borderBottomWidth: 2,
		borderBottomColor: 'transparent',
	},
	tabItemActive: {
		borderBottomColor: '#23b8ff'
	},
	tabItemText: {
		fontSize: 14,
		color: '#666',
	},
	tabItemTextActive: {
		color: '#23b8ff',
	}
});

export default styles;
