import { observable, action, computed } from 'mobx'
import pokemonsDB from '../db/pokemons.json'
import _ from 'lodash'

class PokemonsStore {
    @observable filteredPokemons = pokemonsDB.results
    @observable count = pokemonsDB.count
    @observable limit = 20
    @observable page = 1
    @observable searchValue = ''

    @computed get totalPages() {
        return Math.floor(this.count / this.limit)
    }

    @computed get pokemonsLimited() {
        const limit = this.limit
        const page = this.page - 1
        const start = page === 0 ? 0 : page * limit
        const end = page === 0 ? limit : page * limit + limit
        return _.slice(this.filteredPokemons, start, end)
    }

    @action changePage = (page) => {
        this.page = page
    }

    @action changeLimit = (e, { value }) => {
        this.limit = value
        this.page = 1
    }

    @action handleSearch = (e, { value }) => {
        this.searchValue = value
        if (value.length <= 1) {
            this.filteredPokemons = pokemonsDB.results
            this.count = pokemonsDB.count
        } else {
            const filtered = _.filter(pokemonsDB.results, item => {
                return item.name.indexOf(value) !== -1
            })
            this.filteredPokemons = filtered
            this.count = filtered.length
        }
        this.page = 1
    }
}

export default new PokemonsStore()
