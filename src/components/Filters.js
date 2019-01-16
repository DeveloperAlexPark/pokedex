import React from 'react'
import { inject, observer } from 'mobx-react'
import { Select, Dropdown } from 'semantic-ui-react'

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
class Filters extends React.Component {
    render() {
        const { limit, changeLimit, handleTypes, types, typesValue } = this.props.PokemonsStore
        return (
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
        )
    }
}

export default Filters
