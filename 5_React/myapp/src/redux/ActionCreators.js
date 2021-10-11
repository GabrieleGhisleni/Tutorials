import * as ActionsTypes from './ActionsTypes';

export const addComment = (dishId, rating=2, author, comment) => ({
    type: ActionsTypes.ADD_COMMENT,
    payload: {
        rating: rating,
        dishId: dishId,
        author: author,
        comment: comment
    }
});