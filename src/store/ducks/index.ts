import { combineReducers } from 'redux';

import user from './user';
import spot from './spot';
import auth from './auth';

export default combineReducers({
    auth,
    user,
    spot,
});
