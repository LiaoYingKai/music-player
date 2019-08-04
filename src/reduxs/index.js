import { combineReducers } from 'redux'
import userAlbum from './reducer/userAlbum'

const musicPlayer = combineReducers({
    userAlbum
})

export default musicPlayer;