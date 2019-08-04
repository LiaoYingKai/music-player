import { GET_USER_ALBUM } from '../../actions/actionsType'

export default function userAlbum(state = [], action){
    switch(action.type){
        case GET_USER_ALBUM:{
            return [...state,...[ 'Jessica', 'YouTube Music', 'November', 'Space Hunter', 'The Path Starts', 'If I Had a Chicken' ]]
        }
        default: {
            return state;
        }
    }
}