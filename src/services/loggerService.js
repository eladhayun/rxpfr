import { Observable } from '@reactivex/rxjs'
import { getAction } from 'dispatcher'

const logger =
  getAction()
    .do(console.log.bind(console));

export default Observable.merge(
  logger
);
