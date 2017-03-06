import { h, Component } from 'preact'
import { ClassComponent4 } from './comp4'

interface Props {}

interface State {
  property: boolean
}

export class ClassComponent3 extends Component<Props, State> {

  state = {
    property: false
  }

  componentWillMount() {
    console.log('ClassComponent3: componentWillMount()')
    this.setState({
      property: true
    })
  }

  render() {
    console.log('ClassComponent3: render()')
    return (
      <div>
        <h2>ClassComponent3</h2>
        <ClassComponent4 />
      </div>
    )
  }



}