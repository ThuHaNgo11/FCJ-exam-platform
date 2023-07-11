import moment from "moment"

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
    return new Promise(res => setTimeout(res, delay));
}

export const arrayMergeUnique = (arr1, arr2, compare) => {
    let arr = [...arr1]
    for (let i = 0; i < arr2.length; i++) {
        let found = false
        let j = 0;
        for (; j < arr.length; j++) {
            if (compare(arr2[i], arr[j])) {
                found = true
                break
            }
        }
        if (!found) {
            arr.push(arr2[i])
        }
    }

    return arr
}

export const formatDate = (date, newFormat) => {
    return new moment(date).format(newFormat || "yyyy-MM-DD")
}

export const sendEmails = (emails) => {
    return true
}