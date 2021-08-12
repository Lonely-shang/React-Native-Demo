
import HTTP from '../utils/http'
import { API } from '../utils/config'

export default class IndexApi extends HTTP {

	getCourseDatas () {
		return this.getFetch(API.getCourseDatas, {
			method: 'GET',
		})
	}
}