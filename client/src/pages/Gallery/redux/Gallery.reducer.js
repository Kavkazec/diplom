import * as actions from './Gallery.actions';

const initialPerson = {
    photographers: [],
    categories: [],
    images: {}
};

function loadGallery(state, { payload }) {
    return Object.assign({}, state, {
        photographers: payload.photographers,
        categories: payload.categories,
        images: payload.images
    });
}

function updateGallery(state, { payload }) {
    return Object.assign({}, state, {
        ...state,
        images: payload,
    });
}

function reducer(state = initialPerson, action) {
    switch (action.type) {
        case actions.INITIAL_GALLERY:
            return loadGallery(state, action);
        case actions.UPDATE_GALLERY:
            return updateGallery(state, action);
        default:
            return state;
    }
}

export default reducer;