import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.sass'
import Routes from './routes/Routes'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(<Routes />, document.getElementById('root'))
serviceWorker.unregister()
