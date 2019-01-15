import { observable, action } from 'mobx-react'
import pokemonsDB from '../db/pokemons.json'
import { computed } from 'mobx';
import _ from 'lodash'

class PokemonsStore {
    @observable pokemons = pokemonsDB.result
    @observable count = pokemonsDB.count
    @observable limit = 20
    @observable page = 0

    @computed get pokemonsLimit() {
        const limit = this.limit
        const page = this.page
        const start = page == 0 ? 0 : page * limit
        const end = page == 0 ? limit : page * limit + limit
        return _.slice(this.pokemons, start, end)
    }

    @action changePage = (page) => {
        this.page = page
    }

    @action changeLimit = (limit) => {
        this.limit = limit
    }
}

const PokemonsStore = new PokemonsStore()