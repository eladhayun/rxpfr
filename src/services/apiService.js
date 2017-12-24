import Actions from '../actions';
import { dispatch, getPayload } from '../dispatcher';
import { Observable } from 'rxjs';

const handleGetVersionRequest = () => {
  return Observable.mapTo('1.0.0.0');
};

const getVersion =
  getPayload(Actions.VERSION_REQUESTED)
    .switchMap(handleGetVersionRequest)
    .do(dispatch(Actions.VERSION_RECEIVED));

export default {
  getVersion
}