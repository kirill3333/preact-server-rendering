import { reject } from 'lodash';

import {
  QUERY_POSTS,
  QUERY_POSTS_SUCCESS,
  QUERY_POSTS_ERROR,
  REMOVE_POST
} from '../actions/constants';

const initialState = {
  objects: [],
  loading: false,
  errorMessage: null
}

/*
 * !!! You should always return extended state !!!!
 *
 * e.g.
 * Wrong example (In this case you lost your state data and it raises an uncaught/wrong behavior for subscribers):
 * case QUERY_POSTS:
 *    return {loading: true};
 *
 * Correct:
 * return Object.assign({}, state, {loading: true});
 * */
export const posts = (state = initialState, action) => {

  console.log('reducer ' + action.type)

  switch (action.type) {

    case QUERY_POSTS:
      console.log('QUERY_POSTS')
      return Object.assign({}, state, {loading: true});

    case QUERY_POSTS_SUCCESS:
      console.log('QUERY_POSTS_SUCCESS')
      return Object.assign({}, state, {objects: action.payload, loading: false});

    case QUERY_POSTS_ERROR:
      console.log('QUERY_POSTS_ERROR')
      return Object.assign({}, state, {errorMessage: 'Request posts error', loading: false})

    case REMOVE_POST:
      console.log('REMOVE_POST')
      return Object.assign({}, state, {objects: reject(state.objects, {id: action.payload})})

    default:
      return state;
  }
};
