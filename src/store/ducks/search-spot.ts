export const Types = {
    SEARCH_SPOTS_REQUEST: 'spot/GET_DETAIL_REQUEST',
    SEARCH_SPOTS_REQUEST_SUCCESS: 'spot/GET_DETAIL_REQUEST_SUCCESS',
    SEARCH_SPOTS_REQUEST_FAILURE: 'spot/GET_DETAIL_REQUEST_FAILURE',
    RESET_DATA: 'spot/RESET_DATA',
};

const INITIAL_STATE = {
    loading: false,
    error: false,
    data: {},
};

export const Actions = {
    requestSearchSpots: (userLocation: any, id: any) => ({
        type: Types.SEARCH_SPOTS_REQUEST,
        payload: { userLocation, id },
    }),

    requestSearchSpotsSuccess: (data: any) => ({
        type: Types.SEARCH_SPOTS_REQUEST_SUCCESS,
        payload: { ...data },
    }),

    requestSearchSpotsFailure: () => ({
        type: Types.SEARCH_SPOTS_REQUEST_FAILURE,
    }),

    resetState: () => ({
        type: Types.RESET_DATA,
    }),
};

const spot = (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case Types.SEARCH_SPOTS_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case Types.SEARCH_SPOTS_REQUEST_SUCCESS:
            return {
                ...state,
                data: action.payload,
                loading: false,
                error: false,
            };

        case Types.SEARCH_SPOTS_REQUEST_FAILURE:
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
