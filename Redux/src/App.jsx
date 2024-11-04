import './App.css'
import {Provider} from 'react-redux'
import store from './Redux/Store'
import Counter from './assets/Pages/Counter'
import CounterClass from './assets/Pages/CounterClass'
import ImmerLibrary from './assets/Pages/ImmerLibrary'

function App() {

  return (
    // <Provider store={store}>
    //   <CounterClass/>
    // </Provider>
    <ImmerLibrary/>

  )
}

export default App
