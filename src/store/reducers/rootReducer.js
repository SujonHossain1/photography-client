import { combineReducers } from 'redux';
import adminProductReducer from './admin.productReducer';
import adminAuthReducer from './adminAuthReducer';
import adminReducer from './adminReducer';
import authReducer from './authReducer';
import orderReducer from './orderReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    admin: adminReducer,
    adminAuth: adminAuthReducer,
    product: adminProductReducer,
    order: orderReducer,
});

export default rootReducer;
