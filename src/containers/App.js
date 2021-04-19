import React from 'react'
import '../App.css'
import Surfboards from './Surfboards'

const API_URL = process.env.REACT_APP_API_URL

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      surfboards: []
    }
  }

  componentDidMount() {
    fetch(`${API_URL}/surfboards`)
    .then(resp => resp.json())
    .then(surfboards =>
        this.setState({ surfboards })
      )
  }

  render() {
    return (
      <div className='App'>
        <h1>App Container</h1>
        <Surfboards surfboards={this.state.surfboards}/>
      </div>
    )
  }
}

export default App