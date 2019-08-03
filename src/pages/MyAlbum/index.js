import React, { Component, } from 'react'
import './style.scss'
import banner from '../../images/banner.jpg'
class MyAlbum extends Component{
    constructor(){
        super()
        this._renderAlbum = this._renderAlbum.bind(this)
        this.state = {
            albums: [
                {
                    name: 'kai',
                    image: 'test'
                },
                {
                    name: 'kai',
                    image: 'test'
                },
                {
                    name: 'kai',
                    image: 'test'
                },
                {
                    name: 'kai',
                    image: 'test'
                },
                {
                    name: 'kai',
                    image: 'test'
                },
                {
                    name: 'kai',
                    image: 'test'
                },
                {
                    name: 'kai',
                    image: 'test'
                },
                {
                    name: 'kai',
                    image: 'test'
                },
                {
                    name: 'kai',
                    image: 'test'
                }
                
            ]
        }
    }
    _renderAlbum(){
        const { albums } = this.state
        return (
            albums.map((item, index) => {
                return (
                    <div key={`my-album_${item.name}_${index}`} className="my-album__list-container">
                        <div className="my-album__image">

                        </div>
                        <div className="my-album__name">
                            {item.name}
                        </div>
                    </div>
                )
            })
        )
    }
    render(){
        const { _renderAlbum } = this;

        return (
            <div className="my-album">
                <div className="my-album__banner">

                </div>
                <div className="my-album__content">
                    {_renderAlbum()}
                </div>
            </div>
        )
    }
}

export default MyAlbum;