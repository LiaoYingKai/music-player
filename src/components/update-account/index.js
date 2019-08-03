import React from 'react'
import './style.scss'
import close from '../../images/close.png'

function UpdateAccount(){
    return (
        <div className="update-account">
            <div className="update-account__container">
                <img src={close} className="update-account__close"></img>
                <div className="update-account__slogn">
                    <p>音樂</p>
                    <p>無限</p>
                    <p>升級享受更完美的音樂體驗</p>
                </div>
                <div className="update-account__circle"></div>
                <div className="update-account__box1"></div>
                <div className="update-account__box2"></div>
                <div className="update-account__box3"></div>
                <div className="update-account__button">升級帳號</div>
            </div>
        </div>
    )
}

export default UpdateAccount;