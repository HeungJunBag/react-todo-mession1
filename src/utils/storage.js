export const getStorage = (key) => {
    const data = localStorage.getItem(key)
    return data ? JSON.parse(data) : null
}

export const setStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data))
}
