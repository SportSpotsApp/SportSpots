export const Types = {
    GET_DETAIL_REQUEST: 'spot/GET_DETAIL_REQUEST',
    GET_DETAIL_REQUEST_SUCCESS: 'spot/GET_DETAIL_REQUEST_SUCCESS',
    GET_DETAIL_REQUEST_FAILURE: 'spot/GET_DETAIL_REQUEST_FAILURE',
    RESET_DATA: 'spot/RESET_DATA',
};

const INITIAL_STATE = {
    loading: false,
    error: false,
    data: {},
};

export const Actions = {
    requestSpotDetailRequest: (userLocation: any, id: any) => ({
        type: Types.GET_DETAIL_REQUEST,
        payload: { userLocation, id },
    }),

    requestSpotDetailSuccess: (data: any) => ({
        type: Types.GET_DETAIL_REQUEST_SUCCESS,
        payload: { ...data },
    }),

    requestSpotDetailFailure: () => ({
        type: Types.GET_DETAIL_REQUEST_FAILURE,
    }),

    resetState: () => ({
        type: Types.RESET_DATA,
    }),
};

const spot = (state = INITIAL_STATE, action: any) => {
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

export default spot;
