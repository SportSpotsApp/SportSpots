export const Types = {
    GET_DETAIL_REQUEST: 'user/GET_DETAIL_REQUEST',
    GET_DETAIL_REQUEST_SUCCESS: 'user/GET_DETAIL_REQUEST_SUCCESS',
    GET_DETAIL_REQUEST_FAILURE: 'user/GET_DETAIL_REQUEST_FAILURE',
    RESET_DATA: 'user/RESET_DATA',
};

const INITIAL_STATE = {
    loading: false,
    error: false,
    data: {},
};

export const Actions = {
    requestUserDetailRequest: (userLocation: any, id: any) => ({
        type: Types.GET_DETAIL_REQUEST,
        payload: { userLocation, id },
    }),

    requestUserDetailSuccess: (data: any) => ({
        type: Types.GET_DETAIL_REQUEST_SUCCESS,
        payload: { ...data },
    }),

    requestUserDetailFailure: () => ({
        type: Types.GET_DETAIL_REQUEST_FAILURE,
    }),

    resetState: () => ({
        type: Types.RESET_DATA,
    }),
};

const user = (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case Types.GET_DETAIL_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case Types.GET_DETAIL_REQUEST_SUCCESS:
            return {
                ...state,
                data: action.payload,
                loading: false,
                error: false,
            };

        case Types.GET_DETAIL_REQUEST_FAILURE:
            return {
                ...state,
                loading: false,
                error: true,
            };

        case Types.RESET_DATA:
            return INITIAL_STATE;

        default:
            return state;
    }
};

export default user;
