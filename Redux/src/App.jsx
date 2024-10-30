import './App.css'
import {Provider} from 'react-redux'
import store from './Redux/Store'
import Counter from './assets/Pages/Counter'

function App() {

  return (
    <Provider store={store}>
      <Counter/>
    </Provider>

  )
}

export default App
