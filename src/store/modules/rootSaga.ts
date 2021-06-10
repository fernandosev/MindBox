import { all } from 'typed-redux-saga';

import teste from './teste/sagas';
import login from './login/sagas';

export default function* rootReducer() {
  return yield* all([teste, login]);
}
