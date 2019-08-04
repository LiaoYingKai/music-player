import { GET_USER_ALBUM } from '../../actions/acitonsType'

export default function userAlbum(state = [], action){
    switch(action.type){
        case GET_USER_ALBUM:{
            return ['tetst','test2','test3']
        }
        default: {
            return state;
        }
    }
}