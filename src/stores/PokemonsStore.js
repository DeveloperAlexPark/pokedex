import { observable, action, computed } from 'mobx'
import _ from 'lodash'
import axios from 'axios'

class PokemonsStore {
    @observable filteredPokemons = []
    @observable types = []
    @observable limit = 20
    @observable page = 1
    @observable searchValue = ''
    @observable typesValue = []

    @computed get totalPages() {
        return Math.ceil(this.filteredPokemons.length / this.limit)
    }

    @computed get pokemonsLimited() {
        const limit = this.limit
        const page = this.page - 1
        const start = page === 0 ? 0 : page * limit
        const end = page === 0 ? limit : page * limit + limit
        return _.slice(this.filteredPokemons, start, end)
    }

    @action getPokemons = () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/`).then(response => {
            this.all = this.filteredPokemons = response.data.results
        })
    }

    @action changePage = (e, { activePage }) => {
        this.page = activePage
    }

    @action changeLimit = (e, { value }) => {
        this.limit = value
        this.page = 1
    }

    @action handleSearch = (e, { value }) => {
        this.searchValue = value
        this.typesValue = []
        if (value.length <= 1) {
            this.filteredPokemons = this.all
        } else {
            const filtered = _.filter(this.all, item => {
                return item.name.indexOf(value) !== -1
            })
            this.filteredPokemons = filtered
        }
        this.page = 1
    }

    @action getTypes = () => {
        axios.get(`https://pokeapi.co/api/v2/type/`).then(response => {
            this.types = _.map(response.data.results, item => (
                {
                    text: item.name,
                    value: item.name
                }
            ))
        })
    }

    @action handleTypes = (e, { value }) => {
        this.typesValue = value
        this.page = 1
        if (value.length === 0) {
            this.filteredPokemons = this.all
            return
        }
        const promises = _.map(value, item => axios.get(`https://pokeapi.co/api/v2/type/${item}/`))
        Promise.all(promises).then(response => {
            this.filteredPokemons = _.sortBy(
                _.uniq(
                    _.flatten(
                        _.map(
                            response, item => _.map(item.data.pokemon, item => item.pokemon)
                        )
                    )
                )
                , (o) => o.url)
        })
    }
}

export default new PokemonsStore()
