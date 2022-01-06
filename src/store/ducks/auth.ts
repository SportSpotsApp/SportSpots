export const Types = {
    LOGIN_REQUEST: 'login/GET_DETAIL_REQUEST',
    LOGIN_REQUEST_SUCCESS: 'login/GET_DETAIL_REQUEST_SUCCESS',
    LOGIN_REQUEST_FAILURE: 'login/GET_DETAIL_REQUEST_FAILURE',
    LOGOUT: 'login/RESET_DATA'
};

const INITIAL_STATE = {
    loading: false,
    error: false,
    data: {},
};

export const Actions = {
    requestLoginRequest: (credentials: any) => ({
        type: Types.LOGIN_REQUEST,
        payload: credentials
    }),

    requestLoginSuccess: (data: any) => ({
        type: Types.LOGIN_REQUEST_SUCCESS,
        payload: { ...data },
    }),

    requestLoginFailure: (data: any) => ({
        type: Types.LOGIN_REQUEST_FAILURE,
        payload: data
    }),
    requestLogout: () => ({
        type: Types.LOGOUT,
    })
};

const auth = (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case Types.LOGIN_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case Types.LOGIN_REQUEST_SUCCESS:
            return {
                ...state,
                data: action.payload,
                loading: false,
                error: false,
            };

        case Types.LOGIN_REQUEST_FAILURE:
            return {
                ...state,
                loading: false,
                error: true,
                errorDetail: action.payload
            };
        case Types.LOGOUT:
            return INITIAL_STATE;
        default:
            return state;
    }
};

export default auth;
