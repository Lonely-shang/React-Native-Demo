
import HTTP from '../utils/http'
import { API } from '../utils/config'

export default class ListApi extends HTTP {

	getCourses (field) {
		return this.getFetch(API.getCourses + field, { method: 'GET' })
	}

	getCourseFields () {
		return this.getFetch(API.getCourseFields, { method: 'GET' })
	}
}