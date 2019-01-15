import React from 'react'
import App from '../App'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import {
    Pokemons,
    PageNotFound
} from '../containers'

const Routes = () => (
    <BrowserRouter>
        <App>
            <Switch>
                <Route exact path='/' component={Pokemons} />
                <Route component={PageNotFound} />
            </Switch>
        </App>
    </BrowserRouter>
)

export default Routes
