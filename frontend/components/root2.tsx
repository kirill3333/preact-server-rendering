import { h, Component } from 'preact'
import { ClassComponent3 } from './comp3'

interface Props {}

interface State {
  property: boolean
}

export class RootComponent2 extends Component<Props, State> {

  state = {
    property: false
  }

  componentWillMount() {
    console.log('RootComponent2: componentWillMount()')
    this.setState({
      property: true
    })
  }

  render() {
    console.log('RootComponent2: render()')
    return (
      <div>
        <h1>RootComponent2</h1>
        <ClassComponent3 />
      </div>
    )
  }



}