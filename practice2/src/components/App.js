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

class App extends Component {
  constructor() {
    super()
    this.state = {
      isLoading: true,
      messages: ["hello", "where are you", "did u eat?"]
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading: false
      })
    }, 5000)
  }

  render() {
    const mappedComponents = contacts.map(contact => <ContactCard key={contact.id} src={contact.src} name={contact.name} phone={contact.phone} email={contact.email}/>)

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

      </div>
    )
  }
}

export default App
