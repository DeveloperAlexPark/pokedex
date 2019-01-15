import React from 'react'

export default class Header extends React.Component {
    render() {
        return(
            <div className='header'>
                <div className='container'>
                    <img src={require('../images/logo.png')} className='header__logo' alt='' />
                </div>
            </div>
        )
    }
}