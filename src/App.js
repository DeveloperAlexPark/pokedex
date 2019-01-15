import React, { Component, Fragment } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import appConfig from './config/appConfig'

class App extends Component {

  componentDidMount = () => {
    appConfig();
  }

  render() {
    return (
      <Fragment>
        <Header />
        <div className="body">
          {this.props.children}
        </div>
        <Footer />
      </Fragment>
    );
  }
}

export default App;
