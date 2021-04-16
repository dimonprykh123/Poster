export const deleteSomeData = (state, id) => {
    const index = state.posts.findIndex(el => el.id === id)
    const start = state.posts.slice(0, index)
    const end = state.posts.slice(index + 1)
    const newArr = [...start, ...end]

    return {...state, posts: newArr}
}