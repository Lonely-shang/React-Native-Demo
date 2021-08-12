'use strict';

import React, {Component} from 'react';

import {View, AppRegistry} from 'react-native';

import Swiper from 'react-native-swiper';
import styles from './styles';
import SwiperItem from './SwiperItem';

class IndexSwiper extends Component {
	render() {
		const {swiperData, navigation} = this.props,
			    sHeight = styles.swiperItem.height;
		return (
			<View>
				<Swiper
					key={swiperData.length}
					height={sHeight}
					loop={true}
					autoplay={true}
					showsButtons={false}
					showsPagination={true}
					activeDotColor='#fff'
					paginationStyle={{bottom: 8}}
					>
					{swiperData.map((item, index) => {
						return (
							<SwiperItem
								key={index}
								data={item}
								styles={styles}
								navigation={navigation}
							/>
						);
					})}
				</Swiper>
			</View>
		);
	}
}

export default IndexSwiper;
