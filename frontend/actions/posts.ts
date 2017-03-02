import storeInstance from './../store/index'
import * as request from 'superagent';
import {
  QUERY_POSTS,
  QUERY_POSTS_SUCCESS,
  QUERY_POSTS_ERROR,
  REMOVE_POST
} from './constants';

export function queryPosts() {
  storeInstance.dispatch({
    type: QUERY_POSTS,
  })

  console.log('queryPosts')

  setTimeout(() => {
    console.log('state loaded')
    storeInstance.dispatch({
      type: QUERY_POSTS_SUCCESS,
      payload: [
        {
          "userId": 1,
          "id": 1,
          "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
          "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },
        {
          "userId": 1,
          "id": 2,
          "title": "qui est esse",
          "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
        }
      ]
    })
  }, 2000)

}

export function deletePost(id) {
  storeInstance.dispatch({
    type: REMOVE_POST,
    payload: id
  })
}
