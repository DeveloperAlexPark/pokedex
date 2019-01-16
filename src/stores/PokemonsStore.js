import { observable, action, autorun, toJS } from 'mobx'
import pokemonsDB from '../db/pokemons.json'
import _ from 'lodash'

class PokemonsStore {
    @observable all = toJS(pokemonsDB.results)
    @observable count = pokemonsDB.count
    @observable limit = 20
    @observable page = 0
    @observable pokemonsLimited = []

    reactToChange = autorun(() => {
        const limit = this.limit
        const page = this.page
        const start = page === 0 ? 0 : page * limit
        const end = page === 0 ? limit : page * limit + limit
        this.pokemonsLimited = _.slice(this.all, start, end)
    })

    @action changePage = (page) => {
        this.page = page
    }

    @action changeLimit = (limit) => {
        this.limit = limit
    }
}

export default new PokemonsStore()
