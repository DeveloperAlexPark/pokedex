import React, { Component, Fragment } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div className="body">
          {this.props.children}
        </div>
        <Footer />
      </Fragment>
    )
  }
}

export default App
