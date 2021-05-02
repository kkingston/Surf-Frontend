const API_URL = process.env.REACT_APP_API_URL

//Action Creators => functions that go to the reducers
export const setSurfboards = surfboards => {
  return {
    type: 'GET_SURFBOARDS',
    surfboards
  }
}

// Async actions here
export const getSurfboards = () => {
  return dispatch => {
    return fetch(`${API_URL}/surfboards`)
      .then(resp => resp.json())
      .then(surfboards => {
        //console.log("get boards fetch", surfboards)
        if (surfboards.error) {
          alert(surfboards.error)
        } else {
          dispatch(setSurfboards(surfboards))
        }
      })
      .catch(error => console.log(error));
  }
}

