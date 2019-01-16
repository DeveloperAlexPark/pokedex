import React from 'react'
import { observer, inject } from 'mobx-react'
import PokemonItem from '../components/PokemonItem'
import { Pagination, Select, Dropdown } from 'semantic-ui-react'
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
        const { changePage, page, totalPages, limit, changeLimit, handleTypes, types, typesValue } = this.props.PokemonsStore
        return (
            <div className='container'>
                <div className='filters'>
                    <Select
                        options={limits}
                        value={limit}
                        onChange={changeLimit}
                        className='filters__select'
                    />
                    <Dropdown
                        placeholder='Types...'
                        multiple
                        search
                        selection
                        onChange={handleTypes}
                        options={types}
                        value={typesValue}
                    />
                </div>
                <div className='pokemons'>
                    {this.renderList()}
                </div>
                {totalPages > 1 &&
                    <Pagination
                        activePage={page}
                        onPageChange={changePage}
                        size='mini'
                        totalPages={totalPages}
                        boundaryRange={0}
                    />
                }
            </div>
        )
    }
}

export default Pokemons
