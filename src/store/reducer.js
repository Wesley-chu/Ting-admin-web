const defaultState = {}

export default (state = defaultState, action) => {
  switch (action.type) {
    case "show_point_list":
      var newState = JSON.parse(JSON.stringify(state))
      newState = JSON.parse(JSON.stringify(action.value))
      return newState
  }
  return state;
}