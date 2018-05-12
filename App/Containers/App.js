import React from 'react'
import { Provider } from 'react-redux'
import createStore from '../Store'
import RootContainer from './RootContainer'

const App = () => (
  <Provider store={createStore()}>
    <RootContainer />
  </Provider>
)

export default App
