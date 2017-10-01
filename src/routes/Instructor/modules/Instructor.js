import axios from 'axios';

/// / ------------------------------------
// Constants
// ------------------------------------
export const CREATE_ROOM = 'CREATE_ROOM';
export const GET_COURSES = 'GET_COURSES';
export const GET_CLASSROOMS = 'GET_CLASSROOMS';


export const getCourses = () => {
    const request = axios.post('/classrooms/courses');
    return {
        type: GET_COURSES,
        payload: request,
    }
}

export const getClassrooms = (courseID) => {
    console.log('GET CLASSROOMS');
    const request = axios.post('/classrooms ', {
        courseID: courseID
    });
    return {
        type: GET_CLASSROOMS,
        payload: request,
    }
}

const _createRoom = (coursename, classname) => {
    const request = axios.post('/createroom ', {
        courseID: coursename,
        classname: classname
    });
    return {
        type: CREATE_ROOM,
        payload: request,
    }
}

export const createRoom = (coursename, classname) => (dispatch) => {
    dispatch(_createRoom(coursename, classname)).then(
        (response) => {
            console.log('THUNK RESPONSE => ', response);
            if (response.payload.status === 200) {
                dispatch(getCourses(coursename));
            }
        }
    );
}

export const actions = {
    createRoom,
    getCourses,
    getClassrooms,
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
    [CREATE_ROOM] : (state, action) => {
        return {
            ...state,
        }
    },
    [GET_COURSES] : (state, action) => {
        return {
            ...state,
            courses: action.payload.data
        }
    },
    [GET_CLASSROOMS] : (state, action) => {
        console.log('GET_CLASRROMS REDUCER', action);

        if (!(state.classrooms[action.payload.data.courseID])) {
            let newrooms = [];
            action.payload.data.map(course => {
                newrooms.push({
                    roomID: course.roomID,
                    classname: course.classname,
                });
            });
            console.log('11111',{
                    ...state,
                    classrooms: {
                        ...state.classrooms,
                        [action.payload.data[0].courseID]: newrooms,
                    }
                }
            );
            return {
                ...state,
                classrooms: {
                    ...state.classrooms,
                    [action.payload.data[0].courseID]: newrooms,
                }
            }
        } else {
            let newrooms = [];
            action.payload.data.map(course => {
                newrooms.push({
                    roomID: course.roomID,
                    classname: course.classname,
                });
            });

            console.log('222222', {
                ...state,
                classrooms: {
                    ...state.classrooms,
                    [action.payload.data[0].courseID]: newrooms,
                }
            });
            return {
                ...state,
                classrooms: {
                    ...state.classrooms,
                    [action.payload.data[0].courseID]: state.classrooms[action.payload.data.courseID].push(action.payload.data.roomID),
                }
            }
        }
    },
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
    courses: [],
    classrooms: {
    },
}
export default function instructorReducer (state = initialState, action) {
    const handler = ACTION_HANDLERS[action.type]

    return handler ? handler(state, action) : state
}
