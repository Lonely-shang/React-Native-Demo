
import HTTP from '../utils/http'
import { API } from '../utils/api'

export default class ListApi extends HTTP {

	getCourses (params) {
		return this.getFetch(API.getCourses + params, { method: 'GET' })
	}

	getCourseFields () {
		return this.getFetch(API.getCourseFields, { method: 'GET' })
	}
}