import { Observable } from 'rxjs'
import apiService from './apiService'
import loggerService from './loggerService'

export default Observable.merge(
  loggerService,
  apiService
);