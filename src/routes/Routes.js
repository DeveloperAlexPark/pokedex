import React from 'react'
import App from '../App'
import { Provider } from 'mobx-react'
import createBrowserHistory from 'history/createBrowserHistory'
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router'
import { Router, Route, Switch } from 'react-router'

import {
    Pokemons,
    PageNotFound
} from '../containers'

import stores from '../stores/stores'

const browserHistory = createBrowserHistory()
const routingStore = new RouterStore()

const history = syncHistoryWithStore(browserHistory, routingStore)

const Routes = () => (
    <Provider {...stores} routing={routingStore}>
        <Router history={history}>
            <App>
                <Switch>
                    <Route exact path='/' component={Pokemons} />
                    <Route component={PageNotFound} />
                </Switch>
            </App>
        </Router>
    </Provider>
)

export default Routes
