import * as actions from './PersonalPage.actions';

const initialPerson = {
    data: {}
};

function loadPerson(state, { payload }) {
    return Object.assign({}, state, {
        data: payload,
    });
}

function reducer(state = initialPerson, action) {
    switch (action.type) {
        case actions.INITIAL_PERSON:
            return loadPerson(state, action);
        default:
            return state;
    }
}

export default reducer;