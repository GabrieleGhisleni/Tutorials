import * as ActionsTypes from './ActionsTypes';
import { baseUrl } from '../shared/baseUrl';

export const addComment = (dishId, rating=2, author, comment) => ({
    type: ActionsTypes.ADD_COMMENT,
    payload: {
        rating: rating,
        dishId: dishId,
        author: author,
        comment: comment
    }
});


// return a function so this is a THUNK!
export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading(true))
    return(
        fetch(baseUrl + 'dishes')
            .then(response => response.json())
            .then(dishes => dispatch(addDishes(dishes)))
    );
};

export const dishesLoading = () => ({
    type: ActionsTypes.DISHES_LOADING
});

export const dishesFailed = (errMsg) => ({
    type: ActionsTypes.DISHES_FAILED,
    payload: errMsg
});

export const addDishes = (dishes) => ({
    type: ActionsTypes.ADD_DISHES,
    payload: dishes
})



// Comments
export const fetchComments = () => (dispatch) => {
    return(
        fetch(baseUrl + 'comments')
            .then(response => response.json())
            .then(comment => dispatch(addComments(comment)))
    );
};

export const commentsFailed = (errMsg) => ({
    type: ActionsTypes.COMMENTS_FAILED,
    payload: errMsg
});

export const addComments = (comments) => ({
    type: ActionsTypes.ADD_COMMENTS,
    payload: comments
})

// promotions

export const fetchPromos = () => (dispatch) => {
    return(
        fetch(baseUrl + 'promotions')
            .then(response => response.json())
            .then(promo => dispatch(addPromo(promo)))
    );
};

export const promoFailed = (errMsg) => ({
    type: ActionsTypes.PROMOS_FAILED,
    payload: errMsg
});

export const addPromo = (promos) => ({
    type: ActionsTypes.ADD_PROMOS,
    payload: promos
})


