export const createFormValidation = (values) => {
    const errors = {}

    if (values.title.trim().length < 1) {
        errors.title = "input some title to your post"
    }
    if (values.body.trim().length < 1) {
        errors.body = "input some text for your post"
    }

    return errors

}

export const commentFormValidation = (values) => {
    const errors = {}

    if(values.comment.trim().length < 1){
        errors.comment = "write some txt!"
    }

    return errors
}