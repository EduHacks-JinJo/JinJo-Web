import axios from 'axios';

/// / ------------------------------------
// Constants
// ------------------------------------
export const GET_POSTS = 'GET_POSTS';
export const SET_ROOM_ID = 'SET_ROOM_ID';
export const LIKE_QUESTION = 'LIKE_QUESTION';
export const UNLIKE_QUESTION = 'UNLIKE_QUESTION';

// LOGIN
const _getQuestionsHelper = (roomId) => {
    const request = axios.get('/room/' + roomId + '/getPosts');
    return {
        type: GET_POSTS,
        payload: request,
    }
}
export const getQuestions = (roomId) => (dispatch) => {
    dispatch(_getQuestionsHelper(roomId)).then(
        (response) => {
            console.log('THUNK RESPONSE => ', response);
            if (response.payload.status === 200) {

            }
        }
    );
}

export const setRoomId = (roomId) => {
    return {
        type: SET_ROOM_ID,
        roomId: roomId,
    }
}

const _likeQuestion = (questionId) => {
    const request = axios.get('/question/' + questionId + '/like');
    return {
        type: LIKE_QUESTION,
        payload: request,
    }
}

export const likeQuestion = (questionId) => (dispatch) => {
    dispatch(_likeQuestion(questionId)).then(
        (response) => {
            console.log('THUNK RESPONSE => ', response);
            if (response.payload.status === 200) {

            }
        }
    );
}

const _unlikeQuestion = (questionId) => {
    const request = axios.get('/question/' + questionId + '/unlike');
    return {
        type: LIKE_QUESTION,
        payload: request,
    }
}

export const unlikeQuestion = (questionId) => (dispatch) => {
    dispatch(_unlikeQuestion(questionId)).then(
        (response) => {
            console.log('THUNK RESPONSE => ', response);
            if (response.payload.status === 200) {

            }
        }
    );
}


const _askQuestion = (question, roomId) => {
    const request = axios.post('/room/question', {
        question: question,
        roomId: roomId
    });
    return {
        type: LIKE_QUESTION,
        payload: request,
    }
}

export const askQuestion = (question, roomId) => (dispatch) => {
    dispatch(_askQuestion(question, roomId)).then(
        (response) => {
            console.log('THUNK RESPONSE => ', response);
            if (response.payload.status === 200) {


            }
        }
    );
}


export const actions = {
    getQuestions,
    setRoomId,
    likeQuestion,
    unlikeQuestion,
    askQuestion,
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
    [GET_POSTS] : (state, action) => {
        return {
            ...state,
            questions: action.payload.data.posts,
        }
    },
    [SET_ROOM_ID] : (state, action) => {
        return {
            ...state,
            roomId: action.roomId,
        }
    },

}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
    roomId: 'example_id',
    questions: []
}
export default function roomReducer (state = initialState, action) {
    const handler = ACTION_HANDLERS[action.type]

    return handler ? handler(state, action) : state
}
