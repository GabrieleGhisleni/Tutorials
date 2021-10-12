import * as ActionsTypes from './ActionsTypes';
import { baseUrl } from '../shared/baseUrl';


export const addComment = (comment) => ({
    type: ActionsTypes.ADD_COMMENT,
    payload: comment
});

export const postComment = (dishId, rating, author, comment) => (dispatch) =>{
    const newComment = {dishId:dishId, rating:rating, author:author, comment:comment};
    newComment.date = new Date().toISOString();

    let post_msg;
    post_msg = {
        method:'POST',
        body: JSON.stringify(newComment),
        headers: {'Content-Type': 'application/json'},
        credentials: 'same-origin'
    }

    return fetch(baseUrl + 'comments', post_msg)
        .then(response => {
            // error response from the server
            if (response.ok){return response}
            else{
                let error = new Error('Error with STATUS=' + response.status + ' ' + response.statusText);
                error.response = response;
                throw error;
            }
        }, error => { // the server do not even respond.
            var errMsg = new Error(error.message);
            throw errMsg;
        })
        .then(response => response.json())
        .then(response => dispatch(addComment(response)))
        .catch(error => alert(error.message))
}

// return a function so this is a THUNK!
export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading(true))
    return(
        fetch(baseUrl + 'dishes')
            .then(response => {
                // error response from the server
                if (response.ok){return response}
                else{
                    let error = new Error('Error with STATUS=' + response.status + ' ' + response.statusText);
                    error.response = response;
                    throw error;
                }
            }, error => { // the server do not even respond.
                var errMsg = new Error(error.message);
                throw errMsg;
            })
            .then(response => response.json())
            .then(dishes => dispatch(addDishes(dishes)))
            .catch(error =>{
                dispatch(dishesFailed(error.message))
            })
            
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
            .then(response => {
                // error response from the server
                if (response.ok){return response}
                else{
                    let error = new Error('Error with STATUS=' + response.status + ' ' + response.statusText);
                    error.response = response;
                    throw error;
                }
            }, error => { // the server do not even respond.
                var errMsg = new Error(error.message);
                throw errMsg;
            })
            .then(response => response.json())
            .then(comment => dispatch(addComments(comment)))
            .catch(error =>{
                dispatch(commentsFailed(error.message))
            })
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
            .then(response => {
                // error response from the server
                if (response.ok){return response}
                else{
                    let error = new Error('Error with STATUS=' + response.status + ' ' + response.statusText);
                    error.response = response;
                    throw error;
                }
            }, error => { // the server do not even respond.
                var errMsg = new Error(error.message);
                throw errMsg;
            })
            .then(response => response.json())
            .then(promo => dispatch(addPromo(promo)))
            .catch(error =>{
                dispatch(promoFailed(error.message))
            })
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


