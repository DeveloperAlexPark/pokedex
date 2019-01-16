import React from 'react'
import { observer, inject } from 'mobx-react'
import PokemonItem from '../components/PokemonItem'
import { Pagination, Input } from 'semantic-ui-react'
import _ from 'lodash'

@inject('PokemonsStore')
@observer
class Pokemons extends React.Component {
    renderList = () => (
        _.map(this.props.PokemonsStore.pokemonsLimited, (item, index) => (
            <div className="pokemons__item" key={index}>
                <PokemonItem data={item} />
            </div>
        ))
    )

    render() {
        const { searchValue, handleSearch, changePage, page, totalPages } = this.props.PokemonsStore
        return (
            <div className='container'>
                <div className='search'>
                    <Input
                        placeholder={'Search...'}
                        onChange={_.debounce(handleSearch, 500, { leading: true })}
                        value={searchValue}
                    />
                </div>
                <div className='pokemons'>
                    {this.renderList()}
                </div>
                {totalPages > 0 &&
                    <Pagination
                        activePage={page}
                        onPageChange={(e, { activePage }) => changePage(activePage)}
                        size='mini'
                        totalPages={totalPages}
                    />
                }
            </div>
        )
    }
}

export default Pokemons
