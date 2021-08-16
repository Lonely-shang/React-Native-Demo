const BASE_URL = 'http://txcourseapi.jsplusplus.com/'

const  API = {
	getCourseDatas: BASE_URL + 'course/v2/get_course_datas',
	getCourses: BASE_URL + 'course/v2/get_courses/',
	getCourseFields: BASE_URL + 'course/v2/get_course_fields'
}

const refreshControlOptions = {
	tintColor: '#666',
	title: '正在加载',
	titleColor: '#666'
}

export {
	API,
	refreshControlOptions
}