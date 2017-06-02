export const INITIAL_PHOTOGRAPHERS = 'INITIAL_PHOTOGRAPHERS';
export const INITIAL_PHOTOGRAPHER_ID = 'INITIAL_PHOTOGRAPHER_ID';
export const CLEAR_PHOTOGRAPHER_ID = 'INITIAL_PHOTOGRAPHER_ID';
const API = '/api';

export const loadPhotographers = () => (dispatch) => {
    const url = `${API}/photographer`;
    return fetch(url, {
        method: 'GET',
    })
        .then((response) => {
            if (response.status >= 400) {
                return response.json().then(({ message }) => { throw new Error(message); });
            }
            return response.json();
        })
        .then(data => dispatch({ type: INITIAL_PHOTOGRAPHERS, payload: data }))
};

export const setPhotographerId = id => dispatch =>
    dispatch({ type: INITIAL_PHOTOGRAPHER_ID, payload: id });

export const clearPhotographerId = () => dispatch =>
    dispatch({ type: CLEAR_PHOTOGRAPHER_ID});



