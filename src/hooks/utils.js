
export const getChangeHandler = (callback, state) => {
    return (event) => {
        callback({
            ...state,
            [event.target.name]: event.target.value
        })
    }
}

export const getImmerChangeHandler = (callback) => {
    return (event) => {
        callback(
            (state) => {
                state[event.target.name] = event.target.value
            }
        )
    }
}

export const delay = (delay) => {
    return new Promise( res => setTimeout(res, delay) );
}