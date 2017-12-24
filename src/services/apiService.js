import { Actions } from '../actions';
import { dispatch } from '../dispatcher';
import { Observable } from '@reactivex/rxjs';

const handleGetVersionRequest = () => {
  return Observable.mapTo('1.0.0.0');
};

const getVersion =
  getPayload(Actions.VERSION_REQUESTED)
    .switchMap(handleGetVersionRequest)
    .do(curriedDispatch(Actions.VERSION_RECEIVED));

export default {
  getVersion
}