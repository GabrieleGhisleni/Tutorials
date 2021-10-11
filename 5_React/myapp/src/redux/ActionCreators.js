import * as ActionsTypes from './ActionsTypes';
import { DISHES } from '../shared/dishes';

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
    console.log('HERE inside ActionCreators')

    setTimeout(() => {
        dispatch(addDishes(DISHES));
    }, 2000);
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