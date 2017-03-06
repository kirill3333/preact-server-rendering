import { h, Component } from 'preact'
import { ClassComponent1 } from './comp1'

interface Props {}

interface State {
  property: boolean
}

export class RootComponent1 extends Component<Props, State> {

  state = {
    property: false
  }

  componentWillMount() {
    console.log('RootComponent1: componentWillMount()')
    this.setState({
      property: true
    })
  }

  render() {
    console.log('RootComponent1: render()')
    return (
      <div>
        <h1>RootComponent1</h1>
        <ClassComponent1 />
      </div>
    )
  }



}