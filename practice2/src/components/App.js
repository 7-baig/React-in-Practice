import React, { Component } from 'react'
import ContactCard from './ContactCard'
import contacts from './Contacts'
import StateOne from './StateOne'
import StateTwo from './StateTwo'
import FoodComponent from './FoodComponent'
import Form from './Form'
import LifecycleA from './LifecycleA'
import Conditional from './Conditional'
import ConditionalPractice from './ConditionalPractice'
import FetchPractice from './FetchPractice'
import Time from './Time'
import Timer from './Timer'
import Refs from './Refs'
import Error from './Error'
import ErrorHandling from './ErrorHandling'
import ClickCount from './HOC/ClickCount'
import HoverCount from './HOC/HoverCount'
import ClickCounterTwo from './RenderProps/ClickCounterTwo'
import HoverCounterTwo from './RenderProps/HoverCounterTwo'
import Counter from  './RenderProps/Counter'

class App extends Component {
  constructor() {
    super()
    this.state = {
      // isLoading: true,
      // messages: ["hello", "where are you", "did u eat?"]
    }
  }

  componentDidMount() {
    // setTimeout(() => {
    //   this.setState({
    //     isLoading: false
    //   })
    // }, 5000)
  }

  render() {
    // const mappedComponents = contacts.map(contact => <ContactCard key={contact.id} src={contact.src} name={contact.name} phone={contact.phone} email={contact.email}/>)

    return (
      <div className="app">
        {/* {mappedComponents} */}
        {/* <StateOne /> */}
        {/* <StateTwo /> */}
        {/* <FoodComponent /> */}
        {/* <Form /> */}
        {/* <LifecycleA /> */}
        {/* {this.state.isLoading ? 
        <div><h1>Loading...</h1><p>this will take 5 seconds..</p></div> :
        <Conditional />} */}
        {/* {this.state.messages > 0 ? <h1>you have no messages</h1> : <h1>you have {this.state.messages.length} messages</h1>} */}
        {/* <ConditionalPractice /> */}
        {/* <FetchPractice /> */}
        {/* <Time /> */}
        {/* <Timer /> */}
        {/* <Refs /> */}
        {/* <ErrorHandling>
          <Error hero="batman" />
        </ErrorHandling>
        <ErrorHandling>
          <Error hero="superman" />
        </ErrorHandling>
        <ErrorHandling>
          <Error hero="joker" />
        </ErrorHandling> */}
        {/* <ClickCount name="saad" />
        <HoverCount /> */}
        <Counter 
          render={(count, handler) => <ClickCounterTwo handler={handler} count={count} />}
        />
        <Counter 
          render={(count, handler) => <HoverCounterTwo handler={handler} count={count} />}
        />        
      </div>
    )
  }
}

export default App
