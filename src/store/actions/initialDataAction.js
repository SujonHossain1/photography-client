/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import * as Types from '../constants';

export const getInitialData = () => async (dispatch) => {
    dispatch({ type: Types.GET_PRODUCTS_REQUEST });

    const res = await axios.post('/api/data/get-initial-data');

    if (res.status === 200) {
        const { products } = res.data;
        dispatch({
            type: Types.GET_PRODUCTS_SUCCESS,
            payload: {
                products,
            },
        });
    } else {
        dispatch({
            type: Types.GET_PRODUCTS_FAILURE,
            payload: {
                error: res.data.error,
            },
        });
    }
};
