import { Subject } from '@reactivex/rxjs'

const subject = new Subject()

const dispatcher =
  subject
    .asObservable()
    .publishReplay(1)
    .refCount()

const getAction = (...args) => {
  return dispatcher
}

const getPayload = (...args) => {
  return getAction(...args)
    .pluck('payload')
}

const dispatch = (type, payload = null) => {
  const action = { type, payload }
  dispatcher.next(action)
}

export {
  getAction,
  getPayload,
  dispatch
}