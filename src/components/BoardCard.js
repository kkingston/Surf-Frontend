import React from 'react'

const BoardCard = ({ surfboard }) => (
    <div key={surfboard.id} className='board-card'>
      <h3>{surfboard.name}</h3>
      <h3>${surfboard.price}</h3>
      <p>{surfboard.shaper}</p>
    </div>
)

export default BoardCard;