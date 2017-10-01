import { injectReducer } from '../../store/reducers';

export default store => ({
    path: '/Instructor',
    /*  Async getComponent is only invoked when route matches   */
    getComponent(nextState, cb) {
        /*  Webpack - use 'require.ensure' to create a split point
         and embed an async module loader (jsonp) when bundling   */

        require.ensure([], (require) => {
            /*  Webpack - use require callback to define
             dependencies for bundling   */
            const InstructorContainer = require('./containers/InstructorContainer').default;
            const reducer = require('./modules/Instructor').default;
            /*  Add the reducer to the store on key 'counter'  */
            injectReducer(store, { key: 'instructor', reducer });
            /*  Return getComponent   */
            cb(null, InstructorContainer);
            /* Webpack named bundle   */
        }, 'instructor');
    }
});
