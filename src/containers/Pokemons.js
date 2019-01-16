import React from 'react'
import { observer, inject } from 'mobx-react'
import PokemonItem from '../components/PokemonItem'
import { Pagination } from 'semantic-ui-react'
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
        const { changePage, page, totalPages } = this.props.PokemonsStore
        return (
            <div className='container'>
                <div className='pokemons'>
                    {this.renderList()}
                </div>
                {totalPages > 1 &&
                    <Pagination
                        activePage={page}
                        onPageChange={(e, { activePage }) => changePage(activePage)}
                        size='mini'
                        firstItem={null}
                        lastItem={null}
                        totalPages={totalPages}
                        boundaryRange={0}
                    />
                }
            </div>
        )
    }
}

export default Pokemons
