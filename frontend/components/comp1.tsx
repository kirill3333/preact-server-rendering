import { h, Component } from 'preact'
import { ClassComponent2 } from './comp2'

interface Props {}

interface State {
  property: boolean
}

export class ClassComponent1 extends Component<Props, State> {

  state = {
    property: false
  }

  componentWillMount() {
    console.log('Component1: componentWillMount()')
    this.setState({
      property: true
    })
  }

  render() {
    console.log('Component1: render()')
    return (
      <div>
        <h2>ClassComponent1</h2>
        <ClassComponent2 />
      </div>
    )
  }



}