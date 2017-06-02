import * as actions from './PersonalPage.actions';

const initialPerson = {
    data: {},
    categories: []
};

function loadPerson(state, { payload }) {
    return Object.assign({}, state, {
        data: payload,
    });
}

function loadCategories(state, { payload }) {
    return Object.assign({}, state, {
        ...state,
        categories: payload,
    });
}

function reducer(state = initialPerson, action) {
    switch (action.type) {
        case actions.INITIAL_PERSON:
            return loadPerson(state, action);
        case actions.INITIAL_PERSON_CATEGORIES:
            return loadCategories(state, action);
        default:
            return state;
    }
}

export default reducer;