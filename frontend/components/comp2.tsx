import { h, Component } from 'preact'

interface Props {}

interface State {
  property: boolean
}

export class ClassComponent2 extends Component<Props, State> {

  state = {
    property: false
  }

  componentWillMount() {
    console.log('Component2: componentWillMount()')
    this.setState({
      property: true
    })
  }

  render() {
    console.log('Component2: render()')
    return (
      <div>
        <h3>ClassComponent2</h3>
      </div>
    )
  }



}