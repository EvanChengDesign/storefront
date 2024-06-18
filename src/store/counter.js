let initialState = { count: 0,
    numberOfClicks: 0
};

export const counterReducer = (state = initialState, action) => {
    let { type, payload } = action;

    switch (type) {
        case 'INCREMENT':
            return { 
                count: state.count + payload,
                numberOfClicks: state.numberOfClicks + 1 
            };

        case 'DECREMENT':
            return { 
                count: state.count - payload, 
                numberOfClicks: state.numberOfClicks + 1 
            };
        default:
            return state;
    }
}


export default counterReducer;

// Action Creators

export function increment(payload) {
    return {
    type: 'INCREMENT',
    payload: payload
    }
    
}

export function decrement(payload) {
    return {
    type: 'DECREMENT',
    payload: payload
    }
    
}

