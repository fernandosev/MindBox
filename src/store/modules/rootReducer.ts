import { combineReducers } from '@reduxjs/toolkit';

import teste from './teste/slice';
import login from './login/slice';

const rootReducer = combineReducers({ teste, login });

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
