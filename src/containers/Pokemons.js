import React from 'react'
import { observer, inject } from 'mobx-react'
import ReactPaginate from 'react-paginate'
import PokemonItem from '../components/PokemonItem'

@inject('PokemonsStore')
@observer
class Pokemons extends React.Component {
    renderList = () => (
        this.props.PokemonsStore.pokemonsLimited.map((item, index) => (
            <PokemonItem data={item} key={index} />
        ))
    )

    render() {
        return (
            <div className='container'>
                {this.renderList()}
            </div>
        )
    }
}

export default Pokemons
