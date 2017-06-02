import * as actions from './PersonalPage.actions';

const initialPerson = {
    data: {},
    categories: [],
    images: {}
};

function loadPerson(state, { payload }) {
    return Object.assign({}, state, {
        data: payload.photographer,
        categories: payload.categories,
        images: payload.images
    });
}

function loadAllImages(state, { payload }) {
    return Object.assign({}, state, {
        ...state,
        images: payload,
    });
}

function reducer(state = initialPerson, action) {
    switch (action.type) {
        case actions.INITIAL_PERSON:
            return loadPerson(state, action);
        case actions.INITIAL_PERSON_IMAGES_BY_CATEGORY:
            return loadAllImages(state, action);
        default:
            return state;
    }
}

export default reducer;