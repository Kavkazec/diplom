export const INITIAL_PERSON = 'INITIAL_PERSON';
export const INITIAL_PERSON_CATEGORIES = 'INITIAL_PHOTOGRAPHER_CATEGORIES';
const API = '/api';

export const loadPhotographer = (id) => (dispatch) => {
    const url = `${API}/photographer/${id}`;
    return fetch(url, {
        method: 'GET',
    })
        .then((response) => {
            if (response.status >= 400) {
                return response.json().then(({ message }) => { throw new Error(message); });
            }
            return response.json();
        })
        .then(data => dispatch({ type: INITIAL_PERSON, payload: data }))
};

export const loadCategories = (id) => (dispatch) => {
    const url = `${API}/photographer/category?photographerId=${id}`;
    return fetch(url, {
        method: 'GET',
    })
        .then((response) => {
            if (response.status >= 400) {
                return response.json().then(({ message }) => { throw new Error(message); });
            }
            return response.json();
        })
        .then(data => dispatch({ type: INITIAL_PERSON_CATEGORIES, payload: data }))
};



