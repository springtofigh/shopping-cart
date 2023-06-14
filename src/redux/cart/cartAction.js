const addItem = product => {
    return {
        type: "ADD_ITEM",
        payload: product
    }
}

const removeItem = product => {
    return {
        type: "REMOVE_ITEM",
        payload: product
    }
}

const increas = product => {
    return {
        type: "INCREASE",
        payload: product
    }
}

const decreas = product => {
    return {
        type: "DECREASE",
        payload: product
    }
}

const checkout = () => {
    return {
        type: "CHECKOUT",
    }
}

const clear = () => {
    return {
        type: "CLEAR",
    }
}

export {addItem , removeItem ,increas , decreas , checkout ,clear}