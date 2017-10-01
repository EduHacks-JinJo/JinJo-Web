/**
 * Created by jeffreydoyle on 2017-09-21.
 */
import Cookies from 'universal-cookie';

export const REMOVE_TOKEN = 'REMOVE_TOKEN';
export const ADD_TOKEN = 'ADD_TOKEN';

const initialState = { token: null };

export default (state = initialState, action) => {
    switch (action.type) {
        case REMOVE_TOKEN:
            return {
                ...state,
                token: null
            }

        case ADD_TOKEN:
            const cookies = new Cookies();
            cookies.set('jinjo_token', action.token, { maxAge: 100000, path: '/' });

            return {
                ...state,
                token: action.token
            }

        default:
            return state;
    }
};
