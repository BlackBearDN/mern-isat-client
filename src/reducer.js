export default (state, action) => {
    switch (action.type) {
        case 'JOINED':
            return {
                ...state,
                joined: action.payload,
                userSocket: action.payload.userName,
                roomId: action.payload.roomId,
            };

        case 'SET_USERS':
            return {
                ...state,
                usersOnline: action.payload,
            };

        case 'SET_MESSAGES':
            return {
                ...state,
                messages: action.payload,
            };

        default:
            return state;
    }
}
