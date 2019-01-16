import React from 'react'
import { inject, observer } from 'mobx-react'
import { Table } from 'semantic-ui-react'
import _ from 'lodash'

@inject('PokemonStore')
@observer
class PokemonItem extends React.Component {
    state = {
        pokemon: ''
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

    renderTypes = () => {
        const { pokemon } = this.state
        return _.map(pokemon.types, item => (
            <div className='types__row' key={item.slot}>
                <div className={`types__block type-color--${item.type.name}`}></div>
                <div className='types__text'>{item.type.name}</div>
            </div>
        ))
    }

    renderStats = () => {
        const { pokemon } = this.state
        return (
            <Table basic='very' unstackable>
                <Table.Body>
                    {_.map(pokemon.stats, item => (
                        <Table.Row key={item.stat.name}>
                            <Table.Cell>{item.stat.name}</Table.Cell>
                            <Table.Cell textAlign='right'>{item.base_stat}</Table.Cell>
                            </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        )
    }

    render() {
        const { pokemon } = this.state
        if (!pokemon) return null
        return (
            <div className='pokemon'>
                <div>
                    <div className={`pokemon__name type-color--${pokemon.types[0].type.name}`}>{ pokemon.name }</div>
                    <div className='pokemon__avatar'>
                        <img src={ pokemon.sprites.front_default } alt='' />
                    </div>
                    <div className='pokemon__exp'>
                        Base experience: {pokemon.base_experience}
                    </div>
                    <div className='pokemon__types types'>
                        <div className='pokemon__title'>Type:</div>
                        {this.renderTypes()}
                    </div>
                </div>
                <div className='pokemon__stats'>
                    <div className='pokemon__title'>Stats:</div>
                    {this.renderStats()}
                </div>
            </div>
        )
    }
}

export default PokemonItem
