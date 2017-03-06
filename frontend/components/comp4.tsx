import { h, Component } from 'preact'
import { FunctionComponent } from './fnComp1'

interface Props {}

interface State {
  property: boolean
}

export class ClassComponent4 extends Component<Props, State> {

  state = {
    property: false
  }

  componentWillMount() {
    console.log('ClassComponent4: componentWillMount()')
    this.setState({
      property: true
    })
  }

  render() {
    console.log('ClassComponent4: render()')
    return (
      <div>
        <h3>ClassComponent4</h3>
        <FunctionComponent />
      </div>
    )
  }



}