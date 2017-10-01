import axios from 'axios';

/// / ------------------------------------
// Constants
// ------------------------------------
export const CREATE_ROOM = 'CREATE_ROOM';
export const GET_COURSES = 'GET_COURSES';


export const getCourses = () => {
    const request = axios.get('/classrooms');
    return {
        type: GET_COURSES,
        payload: request,
    }
}

const _createRoom = (classname, coursename) => {
    const request = axios.post('/room/create', {
        classname: classname,
        coursename: coursename
    });
    return {
        type: LIKE_QUESTION,
        payload: request,
    }
}

export const createRoom = (classname, coursename) => (dispatch) => {
    dispatch(_createRoom(classname, coursename)).then(
        (response) => {
            console.log('THUNK RESPONSE => ', response);
            if (response.payload.status === 200) {


            }
        }
    );
}

export const actions = {
    createRoom,
    getCourses,
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
            courses: action.payload.data.courses
        }
    },
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
    courses: [],
}
export default function instructorReducer (state = initialState, action) {
    const handler = ACTION_HANDLERS[action.type]

    return handler ? handler(state, action) : state
}
