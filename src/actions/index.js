export const incNumber = (payload) => {
    return {
        type : "INCREMENT",
        payload
    }
}

export const deccNumber = (payload) => {
    return {
        type : "DECREMENT",
        payload
    }
}

