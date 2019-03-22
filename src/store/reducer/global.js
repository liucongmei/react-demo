
export default (
  state = {
    tab: 'home'
  },
  action
) => {
  switch (action.type) {
    case 'CHANGE_TAB':
    
      return {
        ...state,
        tab: action.tab,
      }

    default:
      return state
  }
}