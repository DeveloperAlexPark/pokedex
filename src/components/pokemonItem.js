import React from 'react'
import { inject, observer } from 'mobx-react'

@inject('PokemonStore')
@observer
class PokemonItem extends React.Component {
    state = {
        pokemon: {}
    }

    componentDidMount = () => {
        this.getPokemon()
    }

    componentDidUpdate = (prevProps) => {
        if (prevProps.data !== this.props.data) {
            this.getPokemon()
        }
    }

    getPokemon = () => {
        this.props.PokemonStore.getPokemonDetail(this.props.data.url, this.props.data.name)
            .then(response => {
                this.setState({ pokemon: response })
            })
    }

    render() {
        const { data } = this.props
        return (
            <div className='pokemon'>
                <div>{ data.name }</div>
            </div>
        )
    }
}

export default PokemonItem
