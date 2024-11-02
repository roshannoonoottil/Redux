import './App.css'
import {Provider} from 'react-redux'
import store from './Redux/Store'
import Counter from './assets/Pages/Counter'
import CounterClass from './assets/Pages/CounterClass'

function App() {

  return (
    <Provider store={store}>
      <CounterClass/>
    </Provider>

  )
}

export default App
