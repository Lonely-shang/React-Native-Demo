import React from 'react';
import { RefreshControl } from 'react-native';
import { refreshControlOptions } from '../../utils/config'


const MyRefreshControl = (props) => {

	const {
					isRefreshing,
					onRefresh,
				} = props

	return (
		<RefreshControl
			refreshing={ isRefreshing }
      onRefresh={ onRefresh }
      tintColor={ refreshControlOptions.tintColor }
      title={ refreshControlOptions.title }
      titleColor={ refreshControlOptions.titleColor }
		/>
	);
}

export default MyRefreshControl;