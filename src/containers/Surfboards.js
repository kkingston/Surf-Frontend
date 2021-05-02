import React from 'react'
import { connect } from 'react-redux'
import BoardCard from '../components/BoardCard'
import { getSurfboards } from '../actions/surfboards'


class Surfboards extends React.Component { 

  componentDidMount() {
    this.props.getSurfboards()
  }

  render() {
    return (
      <div>
        <h3>Stock List</h3>
        {this.props.surfboards.map(surfboard =>
          <BoardCard surfboard={surfboard}/>
        )}
        <h5>one fish</h5>
        <h5>two fish</h5>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log('state', state)
  return ({
    surfboards: state.surfboards
  })
}

export default connect(mapStateToProps, { getSurfboards })(Surfboards)