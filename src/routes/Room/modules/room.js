import axios from 'axios';

/// / ------------------------------------
// Constants
// ------------------------------------
export const GET_POSTS = 'GET_POSTS';
export const SET_ROOM_ID = 'SET_ROOM_ID';
export const LIKE_QUESTION = 'LIKE_QUESTION';
export const UNLIKE_QUESTION = 'UNLIKE_QUESTION';
export const ASK_QUESTION = 'ASK_QUESTION';
export const SET_QUESTIONS = 'SET_QUESTIONS';

// LOGIN

export const setQuestions = (questions) => {
    return {
        type: SET_QUESTIONS,
        questions: questions,
    }
}


const _getQuestionsHelper = (roomId) => {
    const request = axios.post('/questions', {
        roomID: roomId,
    });
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
    const request = axios.post('/upvote', {
        id: questionId,
    });
    return {
        type: LIKE_QUESTION,
        payload: request,
    }
}

export const likeQuestion = (questionId, roomId) => (dispatch) => {
    dispatch(_likeQuestion(questionId)).then(
        (response) => {
            console.log('THUNK RESPONSE => ', response);
            if (response.payload.status === 200) {
                //GET QUESTIONS
                dispatch(getQuestions(roomId));
            }
        }
    );
}

const _unlikeQuestion = (questionId) => {
    const request = axios.post('/downvote', {
        id: questionId,
    });
    return {
        type: UNLIKE_QUESTION,
        payload: request,
    }
}

export const unlikeQuestion = (questionId, roomId) => (dispatch) => {
    dispatch(_unlikeQuestion(questionId)).then(
        (response) => {
            console.log('THUNK RESPONSE => ', response);
            if (response.payload.status === 200) {
                //GET QUESTIONS
                dispatch(getQuestions(roomId));
            }
        }
    );
}


const _askQuestion = (question, roomId) => {
    const request = axios.post('/question', {
        question: question,
        roomID: roomId
    });
    return {
        type: ASK_QUESTION,
        payload: request,
    }
}

export const askQuestion = (question, roomId) => (dispatch) => {
    dispatch(_askQuestion(question, roomId)).then(
        (response) => {
            console.log('THUNK RESPONSE => ', response);
            if (response.payload.status === 200) {
                dispatch(getQuestions(roomId));
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
    setQuestions,
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
    [GET_POSTS] : (state, action) => {
        return {
            ...state,
            questions: action.payload.data,
        }
    },
    [SET_QUESTIONS] : (state, action) => {
        return {
            ...state,
            questions: action.questions,
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
