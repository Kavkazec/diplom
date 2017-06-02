import * as actions from './Review.actions';

const initialPhotographers = {
    data: []
};

function loadPhotographers(state, { payload }) {
    return Object.assign({}, state, {
        review: {
            data: payload,
        },
    });
}

function reducer(state = { review: initialPhotographers }, action) {
    switch (action.type) {
        case actions.INITIAL_PHOTOGRAPHERS:
            return loadPhotographers(state, action);
        default:
            return state;
    }
}

export default reducer;