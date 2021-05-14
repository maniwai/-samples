import React, { PureComponent, Component } from 'react'

// note: Pure Component are evaluating change. if the value don't change, it wont be rerendered (performance boost)
// note: because they implements a method `shouldComponentUpdate` with a shallow props and state comparison (strict comparaison ===)
// note: don't mutate props or state with pure component, return a new object instead
class PureChildComponent extends PureComponent {
  render() {
    console.log('Pure Child Rendered')
    return <div>Pure Child Component | prop name: {this.props.name}</div>
  }
}

class RegularChildComponent extends Component {
  render() {
    console.log('Regular Child Rendered')
    return <div>Regular Child Component | prop name: {this.props.name}</div>
  }
}

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
      this.setState({ name: 'Guest' }) // will re-render only once
    }, 1000)
  }
  render() {
    console.log('----------------------------- Parent Rendered ----------------------------')
    return (
      <>
        <div>Regular Child Component</div>
        <RegularChildComponent name={this.state.name} />
        <PureChildComponent name={this.state.name} />
      </>
    )
  }
}
export default ParentComponent
