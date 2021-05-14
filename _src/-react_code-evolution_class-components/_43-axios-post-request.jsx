import React, { Component } from 'react'
import axios from 'axios';

export class PostForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      userId: '',
      title: '',
      body: '',
    }
  }

  handleChange = (e) => {
    // note: e.target.name takes the name from the attribute `name` of the input (same for value)
    this.setState({ [e.target.name]: e.target.value })
  }
  handleSubmit = (e) => {
      e.preventDefault()
      console.log(this.state)
      axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
      .then((result) => {
          console.log(result)
      }).catch((err) => {
          console.log(err)
      });
  }
  render() {
    const { userId, title, body } = this.state

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input type="text" name="userId" value={userId} onChange={this.handleChange} />
          </div>
          <div>
            <input type="text" name="title" value={title} onChange={this.handleChange} />
          </div>
          <div>
            <input type="text" name="body" value={body} onChange={this.handleChange} />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default PostForm
