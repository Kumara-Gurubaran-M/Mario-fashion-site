import React from 'react'
import Login from "./component/Login"
import { Provider } from 'react-redux'
import store from "./component/redux/store"



function App() {
  return (
    <Provider store={store}>
      <Login />
    </Provider>
  )
}

export default App