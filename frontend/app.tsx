import { h, Component } from 'preact'
import storeInstance from './store/index'
import { queryPosts, deletePost } from './actions';

interface Props {}

interface State {
  loading: boolean,
  objects: any[],
  errorMessage: string | null,
}

export class AppComponent extends Component<Props, State> {

  state: State = {
    loading: false,
    objects: [],
    errorMessage: null
  }

  componentDidMount() {
    /*
     * Subscribe on the posts updates here. If any actions touch a @posts reducer, we
     * get a new @post state here immediately. then we update inner state to make re-render.
     * (#setState method updates the state object and call #render automatically)
     *
     * We can use this.setState(newState) - because newState has same structure as current state. Otherwise we
     * should map values manually.
     *
     * */
    console.log('componentDidMount')
    storeInstance.select('posts').subscribe((newState: State) => this.setState(newState));
  }

  componentWillMount() {
    console.log(storeInstance)
    storeInstance.select('posts').subscribe((newState: State) => {
      this.setState(newState)
    })
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
  }

  componentDidUnmount() {
    console.log('componentDidUnmount')
  }

  componentWillReceiveProps() {
    console.log('componentWillReceiveProps')
  }

  shouldComponentUpdate() {
    console.log('shouldComponentUpdate')
  }

  componentWillUpdate() {
    console.log('componentWillUpdate')
  }

  componentDidUpdate() {
    console.log('componentDidUpdate')
  }

  render() {
    console.log('render');
    /* Get loading and objects variables from state. (ES6 syntax) */
    const { loading, objects } = this.state;

    return (
      <div>
        <h2>Demo</h2>
        <h3>List of posts: </h3>
        <ul>
          <li>(press <b>load posts</b> button for posts request)</li>
          <li>press X icon for removing post</li>

        </ul>

        {/* Click on button provide query posts action.
         * Process flow is:
         * queryPosts (called on click) >
         * postAction(dispatch new data in the store) >
         * postsReducer (modify store)
         * this#subscriber (catch store update and update inner state of this component)
         */}
        <button onClick={queryPosts}>load posts</button>

        {/* Show preloader */}
        { loading && <span>loading...</span> }

        {/* Posts table */}
        <table>
          <tr>
            <th>ID</th>
            <th>user ID</th>
            <th>title</th>
            <th>actions</th>
          </tr>
          { objects.map(post => (
            <tr>
              <td>{post.id}</td>
              <td>{post.userId}</td>
              <td>{post.title}</td>
              <td onClick={() => deletePost(post.id)} style={{cursor: 'pointer'}}> X </td>
            </tr>
          ))}

        </table>
      </div>

    );
  }
}
