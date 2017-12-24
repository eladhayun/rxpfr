import { Observable } from '@reactivex/rxjs';
import { Actions } from 'actions';

const version =
  getPayload(Actions.VERSION_RECEIVED)
    .startWith('');

export default
  Observable
    .combineLatestObj({
      version
    });
