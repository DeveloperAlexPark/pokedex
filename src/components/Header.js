import React from 'react'
import { inject, observer } from 'mobx-react'
import { Link } from 'react-router-dom'
import { Input } from 'semantic-ui-react'
import _ from 'lodash'

@inject('PokemonsStore')
@observer
class Header extends React.Component {
    render() {
        const { searchValue, handleSearch } = this.props.PokemonsStore
        return (
            <div className='header'>
                <div className='container'>
                    <div className='header__container'>
                        <Link to={'/'} className='logo'>
                            <img src={require('../images/logo.png')} className='logo__img' alt='' />
                        </Link>
                        <div className='search header__search'>
                            <Input
                                placeholder={'Search...'}
                                onChange={_.debounce(handleSearch, 500, { leading: true })}
                                value={searchValue}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header
