import React from 'react'

class BoardForm extends React.Component {
  render() {
    return (
      <div className="board-form">
        <form>
          <h1>Add to our Inventory</h1>
          <label htmlFor="name">
            <input placeholder="name" type="text"/>
          </label>
          {/* <label htmlFor="size">
            <input value='size' type="text"/>
          </label>
          <label htmlFor="price">
            <input value='price' type="text"/>
          </label>
          <label htmlFor="shaper">
            <input value='shaper' type="text"/>
          </label>
          <label htmlFor="location">
            <input value='location' type="text"/>
          </label>
          <label htmlFor="description">
            <input value='description' type="text"/>
          </label>
          <label htmlFor="img-url">
            <input value='img-url' type="text"/>
          </label> */}
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default BoardForm;