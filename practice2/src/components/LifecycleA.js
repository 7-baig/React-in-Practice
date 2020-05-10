import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Saad'
        }
        console.log('LIFECYCLE A CONSTRUCTOR')
        this.changeState = this.changeState.bind(this)
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LIFECYCLE A getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('LIFECYCLE A COMPONENT DID MOUNT')
    }

    shouldComponentUpdate() {
        console.log('LIFECYCLE A SHOULD COMPONENT UPDATE')
        return true
    }

    getSnapshotBeforeUpdate() {
        console.log('LIFECYCLE A getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate() {
        console.log('LIFECYCLE A componentDidUpdate')
    }

    changeState() {
        this.setState({
            name: 'Baig'
        })
    }

    render() {
        console.log('LIFECYCLE A RENDER')
        return (
            <div>
                LIFECYCLE A
                <button onClick={this.changeState}>change state</button>
                <LifecycleB />
            </div>
        )
    }
}

export default LifecycleA
