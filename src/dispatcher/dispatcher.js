import { Subject } from 'rxjs';

const subject = new Subject()

const dispatcher =
  subject
    .asObservable()
    .publishReplay(1)
    .refCount()

const buildFilterFunction = (args) => {
  return (message) => {
    // If filter args have actions to filter by them
    return (
      Object.keys(args)
        .some(key => args[key] === message.type)
    )
  }
};

const getAction = (...args) => {
  return dispatcher
    .filter(buildFilterFunction(args));
};

const getPayload = (...args) => {
  return getAction(...args)
    .pluck('payload');
};

const dispatch = (type, payload = null) => {
  const action = { type, payload };
  dispatcher.next(action);
};

export default {
  getAction,
  getPayload,
  dispatch
};