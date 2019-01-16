import React from 'react'
import { observer, inject } from 'mobx-react'
import PokemonItem from '../components/PokemonItem'
import { Pagination } from 'semantic-ui-react'
import _ from 'lodash'
import Filters from '../components/Filters'

@inject('PokemonsStore')
@observer
class Pokemons extends React.Component {
    componentDidMount = () => {
        this.props.PokemonsStore.getTypes()
        this.props.PokemonsStore.getPokemons()
    }

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
                <Filters />
                <div className='pokemons'>
                    {this.renderList()}
                </div>
                {totalPages > 1 &&
                    <div className='pagination-wrapper'>
                        <Pagination
                            activePage={page}
                            onPageChange={changePage}
                            size='mini'
                            totalPages={totalPages}
                            boundaryRange={0}
                        />
                    </div>
                }
            </div>
        )
    }
}

export default Pokemons
