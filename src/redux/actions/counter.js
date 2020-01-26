const setActionCount = (count) => {
    return {
        type: "INCREMENT_COUNT",
        payload: count,
    }
}

export default setActionCount;