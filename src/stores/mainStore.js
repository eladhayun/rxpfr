import Actions from '../actions';
import { Observable } from 'rxjs';
import { getPayload } from '../dispatcher';

const version =
  getPayload(Actions.VERSION_RECEIVED)
    .startWith('');

export default
  Observable
    .combineLatestObj({
      version
    });
