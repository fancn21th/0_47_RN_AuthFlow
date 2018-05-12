import configureStore from './CreateStore'
import rootReducer from '../Reducers'
import rootSaga from '../Sagas'

export default () => configureStore(rootReducer, rootSaga)
