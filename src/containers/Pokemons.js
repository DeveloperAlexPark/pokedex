import React from 'react'
import PokemonItem from '../components/pokemonItem'
import PokemonStore from '../stores/PokemonsStore'

class Pokemons extends React.Component {
    
    componentDidMount = () => {
        console.log(this.props)
    }

    renderList = (item) => null

    render() {
        return(
            <div className='container'>
                {this.renderList()}
            </div>
        )
    }
}

export default Pokemons