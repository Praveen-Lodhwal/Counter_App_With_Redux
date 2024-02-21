let intilitionState = 0

export const changenumber = (state = intilitionState, action) => {
    switch (action.type) {
        case 
            "IncrementType" : return state + 1
        case 
            "DecrementType" : return state - 1 
        default : return state
    }
}