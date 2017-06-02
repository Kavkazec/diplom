export const INITIAL_PHOTOGRAPHERS = 'INITIAL_PHOTOGRAPHERS';
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



