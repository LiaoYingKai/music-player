import { GET_USER_ALBUM_LIST, GET_USER_ALBUMS, GET_USER_ALBUMS_SUCCESS, GET_USER_ALBUMS_ERROE } from './actionsType'

export function getUserAlbumList(){
    return {
        type: GET_USER_ALBUM_LIST
    }
}

export function getUserAlbums(){
    return {
        type: GET_USER_ALBUMS
    };
}

export function getUserAlbumsSuccess(data){
    return {
        type: GET_USER_ALBUMS_SUCCESS,
        data
    }
}

export function getUserAlbumsError(error){
    return {
        type: GET_USER_ALBUMS_ERROE,
        error
    }
}

export function getAlbum(){
    return dispatch => {
        // dispatch(getUserAlbums());
        return fetch('http://localhost:3000/search?keywords=頑童', {
            method: 'GET',
            xhrFields: { withCredentials: true },
        })
        .then(response => {
            dispatch(getUserAlbumsSuccess(response));
        })
        .catch(error => dispatch(getUserAlbumsError(error)));
        };
}