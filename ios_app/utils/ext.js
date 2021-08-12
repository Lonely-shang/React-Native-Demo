function directToPage ( navigation, pageName, params ) {
		navigation.navigate(pageName, params);
}



function filterFiledData ( courseData, filed, doSlice ) {
	const _data = courseData.filter( (item, index) => {
		if (item.filed === 'all') return true;
		return item.filed === filed;
	})
	return doSlice ? _data.slice(0, 4) : _data;
}

export {
	directToPage,
	filterFiledData
}