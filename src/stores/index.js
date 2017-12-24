import { Observable } from 'rxjs';
import mainStore from './mainStore';

export default Observable.combineLatest(
  mainStore
);