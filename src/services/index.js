import { Observable } from '@reactivex/rxjs'
import apiService from './apiService'

export default Observable.merge(
  loggerService,
  apiService
);