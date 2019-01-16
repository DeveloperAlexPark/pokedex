import React from 'react'
import { inject, observer } from 'mobx-react'
import { Link } from 'react-router-dom'
import { Input, Select } from 'semantic-ui-react'
import _ from 'lodash'

const limits = [
    {
        text: '10',
        value: 10
    },
    {
        text: '20',
        value: 20
    },
    {
        text: '50',
        value: 50
    }
]

@inject('PokemonsStore')
@observer
class Header extends React.Component {
    render() {
        const { searchValue, handleSearch, limit, changeLimit } = this.props.PokemonsStore
        return (
            <div className='header'>
                <div className='container'>
                    <div className='header__container'>
                        <Link to={'/'} className='logo'>
                            <img src={require('../images/logo.png')} className='logo__img' alt='' />
                        </Link>
                        <div className='header__select'>
                            <Select
                                options={limits}
                                value={limit}
                                onChange={changeLimit}
                            />
                        </div>
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
