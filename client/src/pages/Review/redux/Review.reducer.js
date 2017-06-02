import * as actions from './Review.actions';

const initialPhotographers = {
    data: [],
    user: null
};

function loadPhotographers(state, { payload }) {
    return Object.assign({}, state, {
        review: {
            data: payload,
        },
    });
}

function setPhotographerId(state, { payload }) {
    return Object.assign({}, state, {
        review: {
            ...state.review,
            user: payload,
        },
    });
}

function clearPhotographerId(state) {
    return Object.assign({}, state, {
        review: {
            ...state.review,
            user: null,
        },
    });
}

function reducer(state = { review: initialPhotographers }, action) {
    switch (action.type) {
        case actions.INITIAL_PHOTOGRAPHERS:
            return loadPhotographers(state, action);
        case actions.INITIAL_PHOTOGRAPHER_ID:
            return setPhotographerId(state, action);
        case actions.CLEAR_PHOTOGRAPHER_ID:
            return clearPhotographerId(state, action);
        default:
            return state;
    }
}

export default reducer;