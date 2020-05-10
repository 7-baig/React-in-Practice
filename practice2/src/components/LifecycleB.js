import React, { Component } from 'react'

class LifecycleB extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'Saad'
       }
       console.log('LIFECYCLE B CONSTRUCTOR')
    }


    static getDerivedStateFromProps(props, state) {
        console.log('LIFECYCLE B getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('LIFECYCLE B COMPONENT DID MOUNT')
    }

    shouldComponentUpdate() {
        console.log('LIFECYCLE B SHOULD COMPONENT UPDATE')
        return true
    }

    getSnapshotBeforeUpdate() {
        console.log('LIFECYCLE B getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate() {
        console.log('LIFECYCLE B componentDidUpdate')
    }


    render() {
        console.log('LIFECYCLE B RENDER')
        return (
            <div>
                LIFECYCLE B
            </div>
        )
    }
}

export default LifecycleB
