const surfboards = (state = [], action) => {  //reducer will always have state and an action
  switch(action.type) {
    case 'GET_SURFBOARDS':
      return action.surfboards;
      default:
        return state
  }
}

export default surfboards