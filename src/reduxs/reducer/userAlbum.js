import { GET_USER_ALBUM_LIST, GET_USER_ALBUMS, GET_USER_ALBUMS_SUCCESS } from '../../actions/actionsType'

export default function userAlbum(state = {}, action){
    switch(action.type){
        case GET_USER_ALBUM_LIST:{
            return Object.assign({},state, {userAlbumList: [ 'Jessica', 'YouTube Music', 'November', 'Space Hunter', 'The Path Starts', 'If I Had a Chicken' ]})
        }
        case GET_USER_ALBUMS:{
            return Object.assign({},state)
        }
        case GET_USER_ALBUMS_SUCCESS:{
            return Object.assign({},state, {userAlbums: action.data})
        }
        case GET_USER_ALBUMS_SUCCESS:{
            console.log(action)
            return Object.assign({},state, {error: action.error})
        }
        default: {
            return state;
        }
    }
}