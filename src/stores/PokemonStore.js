import { observable, action } from 'mobx'
import axios from 'axios'
import _ from 'lodash'

class PokemonStore {
    @observable pokemonsDetailed = []

    @action setPokemonDetail = (pokemon) => {
        this.pokemonsDetailed.push(pokemon)
    }

    getPokemonDetail = (url, name) => {
        return new Promise((resolve, reject) => {
            const foundPokemon = this.findPokemon(name)
            if (foundPokemon) return resolve(foundPokemon)
            axios.get(url)
                .then(response => {
                    const res = response.data
                    res.types = _.sortBy(res.types, item => item.slot)
                    this.setPokemonDetail(res)
                    resolve(res)
                })
        })
    }

    findPokemon = (name) => {
        return _.find(this.pokemonsDetailed, item => {
            return item.name === name
        })
    }
}

export default new PokemonStore()
