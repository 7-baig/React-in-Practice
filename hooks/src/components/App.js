import React from 'react'
import './App.css'
import Counter from './Counter'
import CounterTwo from './CounterTwo'
import CounterThree from './CounterThree'
import CounterFour from './CounterFour'
import UseEffect from './UseEffect'
import HooksMouse from './HooksMouse'
import DataFetching from './DataFetching'
import Registration from './Forms/Registration'
// import Store, { Context } from './Context/Store'
import ComponentA from './Context/ComponentA'
import ComponentB from './Context/ComponentB'
import Header from './FetchWithContext.js/Header'
import Main from './FetchWithContext.js/Main'
import Store, { Context } from './FetchWithContext.js/Store'

function App() {
  return (
    <div> 
      {/* <Counter />       */}
      {/* <CounterTwo /> */}
      {/* <CounterThree /> */}
      {/* <CounterFour /> */}
      {/* <UseEffect /> */}
      {/* <HooksMouse /> */}
      {/* <DataFetching /> */}
      {/* <Registration /> */}
      {/* <Store>
        <ComponentA />
        <ComponentB />
      </Store> */}
      <Store>
        <Header />
        <Main />
      </Store>

    </div>
  )
}

export default App
