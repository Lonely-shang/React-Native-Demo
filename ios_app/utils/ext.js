function directToPage ( navigation, pageName, params ) {
		navigation.navigate(pageName, params);
}



function filterFiledData ( courseData, field, doSlice ) {

	const _data = courseData.filter( (item, index) => {
		if (item.field === 'all') return true;
		return item.field === field;
	})
	
	return doSlice ? _data.slice(0, 4) : _data;
}

export {
	directToPage,
	filterFiledData
}