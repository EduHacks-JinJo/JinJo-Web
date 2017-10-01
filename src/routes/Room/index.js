import { injectReducer } from '../../store/reducers';
import { setRoomId } from './modules/room';

export default store => ({
    path: '/room(/:roomId)',
    /*  Async getComponent is only invoked when route matches   */
    getComponent(nextState, cb) {
        /*  Webpack - use 'require.ensure' to create a split point
         and embed an async module loader (jsonp) when bundling   */

        if (nextState.params.roomId) {
            store.dispatch(setRoomId(nextState.params.roomId));
        }

        require.ensure([], (require) => {
            /*  Webpack - use require callback to define
             dependencies for bundling   */
            const RoomContainer = require('./containers/RoomContainer').default;
            const reducer = require('./modules/room').default;
            /*  Add the reducer to the store on key 'counter'  */
            injectReducer(store, { key: 'room', reducer });
            /*  Return getComponent   */
            cb(null, RoomContainer);
            /* Webpack named bundle   */
        }, 'room');
    }
});
