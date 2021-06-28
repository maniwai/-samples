import React, { Component } from 'react'

// note: used to access dom element (ex: focus on element after refresh)
class RefsComponent extends Component {
  constructor(props) {
    super(props)

    this.inputRef = React.createRef()
  }

  componentDidMount() {
    this.inputRef.current.focus()
    console.log(this.inputRef)
  }
  clickHandler = () =>  {
      alert(this.inputRef.current.value)
  }
  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default RefsComponent
