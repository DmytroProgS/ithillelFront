// src/actions.js
export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';
export const CLEAR_DATA = 'CLEAR_DATA';

export const fetchData = (endpoint) => async (dispatch) => {
    dispatch({ type: FETCH_DATA_REQUEST });

    try {
        const response = await fetch(`https://swapi.dev/api/${endpoint}`);
        const data = await response.json();
        dispatch({ type: FETCH_DATA_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: FETCH_DATA_FAILURE, error });
    }
};

export const clearData = () => ({
    type: CLEAR_DATA,
});
