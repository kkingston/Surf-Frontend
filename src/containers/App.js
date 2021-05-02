import React from 'react'
import '../App.css'
import Surfboards from './Surfboards'
import BoardForm from './BoardForm'

class App extends React.Component {

  render() {
    return (
      <div className='App'>
        <h1>App Container</h1>
        <Surfboards />
        <BoardForm />
      </div>
    )
  }
}

export default App