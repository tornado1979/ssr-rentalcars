export default function loger({ getState }) {
  return (next) => (action) => {
    const console = window.console // eslint-disable-line
    const prevState = getState()
    const returnValue = next(action)
    const nextState = getState()
    const actionType = String(action.type) // eslint-disable-line
    const message = 'action ${actionType}' // eslint-disable-line
    console.log('%c prev state', 'color: #9E9E9E', prevState)
    console.log('%c action', 'color: #03A9F4', action)
    console.log('%c next state', 'color: #4CAF50', nextState)
    return returnValue
  }
}
