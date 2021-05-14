
import React, { Component } from 'react'

class FormComponent extends Component {
    constructor(props) {
        super(props)
        // note: 1. set initial state
        this.state = {
             username: '',
             comments: '',
             topic: 'react'
        }   
    }
    //note: 2. handle change
    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }
    handleCommentChange = (event) => {
        this.setState({
            comments: event.target.value
        })
    }
    handleTopicChange = (event) => {
        this.setState({
            topic: event.target.value
        })
    }
    handleSubmit = (event) => {
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
        // note: prevent form to refresh page
        event.preventDefault()
    }
    render() {
        return (
            // submit needs to be handle at the `form` level
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="">Username</label>
                    <input type="text" value={this.state.username} onChange= {this.handleUsernameChange}/>
                </div>
                <div>
                    <label htmlFor="">Comment</label>
                    <textarea value={this.state.comments} onChange={this.handleCommentChange}></textarea>
                </div>
                <div>
                    <label htmlFor="">Topic</label>
                    <select value={this.state.topic} onChange={this.handleTopicChange}>
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                        <option value="vue">Vue</option>
                    </select>
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default FormComponent
