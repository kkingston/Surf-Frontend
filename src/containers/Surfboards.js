import React from 'react'

const Surfboards = (props) => 
<div>
  <h3>Stock List</h3>
  {props.surfboards.map(surfboard =>
    <div key={surfboard.id} className='board-card'>
    <h3>{surfboard.name}</h3>
    <h3>${surfboard.price}</h3>
    <p>{surfboard.shaper}</p>
    </div>
  )}
  <h5>one fish</h5>
  <h5>two fish</h5>
</div>

export default Surfboards