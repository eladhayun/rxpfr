import { Observable } from '@reactivex/rxjs'
import mainStore from './mainStore';

export default Observable.combineLatest(
  mainStore
);