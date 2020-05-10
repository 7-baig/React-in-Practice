import React, { Component } from 'react'
import './App.css';

class ContactCard extends Component {
    render() {
        return (
            <div className="cards">
                <img src={this.props.src} />
                <h3>{this.props.name}</h3>
                <p>phone: {this.props.phone} </p>
                <p>email: {this.props.email}</p>
            </div>
        )
    }
}

export default ContactCard
