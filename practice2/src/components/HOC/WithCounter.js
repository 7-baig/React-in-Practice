import React from 'react'

const UpdatedComponent = (OriginalComponent, incrementNumber) => {
    class NewComponent extends React.Component {

        constructor(props) {
            super(props)
        
            this.state = {
                count: 0                
            }
            this.clickHandler = this.clickHandler.bind(this)
        }
        
        clickHandler() {
            this.setState(prevState => {
                return {
                    count: prevState.count + incrementNumber
                }
            })
        }

        render() {
            return (
                <OriginalComponent 
                    clickHandler={this.clickHandler} 
                    count={this.state.count} 
                    {... this.props} 
                />)
        }
    }
    return NewComponent
}

export default UpdatedComponent