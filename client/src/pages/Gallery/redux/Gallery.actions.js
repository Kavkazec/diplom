export const INITIAL_GALLERY = 'INITIAL_GALLERY';
export const UPDATE_GALLERY = 'UPDATE_GALLERY';
const API = '/api';

export const loadGallery = () => (dispatch) => {
    const url = `${API}/gallery`;
    return fetch(url, {
        method: 'GET',
    })
        .then((response) => {
            if (response.status >= 400) {
                return response.json().then(({ message }) => { throw new Error(message); });
            }
            return response.json();
        })
        .then(data => dispatch({ type: INITIAL_GALLERY, payload: data }))
};

export const updateGallery = (photographerIds,categoryNames) => (dispatch) => {
    const params = {
        photographerIds,
        categoryNames
    };
    return fetch(`${API}/gallery`, {
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
        .then(data => dispatch({ type: UPDATE_GALLERY, payload: data }))
};



