import * as soflux from '@solid-opinion/soflux'
import * as reducers from '../reducers';

/*
 Creating app Store.
 * It is a singleton.
 */

let storeInstance = soflux.createStore(reducers, {});

export default storeInstance