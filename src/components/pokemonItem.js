import React from 'react'

export default class PokemonItem extends React.Component {
    render() {
        const { data } = this.props
        return (
            <div>{ data.name }</div>
        )
    }
}
