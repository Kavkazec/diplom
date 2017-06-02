export const INITIAL_PERSON = 'INITIAL_PERSON';
export const INITIAL_PERSON_IMAGES_BY_CATEGORY = 'INITIAL_PERSON_IMAGES_BY_CATEGORY';
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

export const loadImagesByCategory = (id,categories) => (dispatch) => {
    const params = {
      id: id,
      categories: categories
    };
    return fetch(`${API}/photographer/images`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(params),
    })

        .then((response) => {
            if (response.status >= 400) {
                return response.json().then(({ message }) => { throw new Error(message); });
            }
            return response.json();
        })
        .then(data => dispatch({ type: INITIAL_PERSON_IMAGES_BY_CATEGORY, payload: data }))
};



