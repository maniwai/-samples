import React, {Component} from 'react'

// note: functionnal version of `PureComponent`
function ChildComponent({name}) {
    console.log('rendering memo component');
    return (
        <div>
            {name}
        </div>
    )
}
// note: should be an export instead
// note: passing component in argument  also called Higher Order Component (HOC)
const MemoComponent = React.memo(ChildComponent)

class ParentComponent extends Component {
    constructor(props) {
      super(props)
  
      this.state = {
        name: 'Mani',
      }
    }
    componentDidMount = () => {
      setInterval(() => {
        // note: copy same name for the demo (react needs to shallow compare)
        this.setState({ name: 'Guest' })
      }, 1000)
    }
    render() {
      console.log('----------------------------- Parent Rendered ----------------------------')
      return (
        <>
          <div>React.memo()</div>
          <MemoComponent name={this.state.name} />
        </>
      )
    }
  }
  export default ParentComponent
  
