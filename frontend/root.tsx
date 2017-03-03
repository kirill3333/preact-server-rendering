import { h, Component } from 'preact'
import { FunctionComponent } from './function'

interface Props {}

interface State {
  property: boolean
}

export class RootComponent extends Component<Props, State> {

  state: State

  constructor() {
    super()
    this.state = {
      property: false
    }
  }

  componentWillMount() {
    console.log('componentWillMount')
    this.setState({
      property: true
    })
  }

  render() {
    return (
      <div>
        <h1>Root</h1>
        <FunctionComponent />
      </div>
    )
  }



}