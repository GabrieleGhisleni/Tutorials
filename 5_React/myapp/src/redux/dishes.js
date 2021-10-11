import * as ActionsTypes from './ActionsTypes';

let defaultState = {
    isLoading: true,
    errMessage: null,
    dishes: []
}

export const Dishes = (state = defaultState, action) => {
    switch (action.type) {
        case ActionsTypes.ADD_DISHES:
            console.log('INSIDE DISHES:' , action.payload)
            return {...state, isLoading:false, errMsg:null, dishes: action.payload }

        case ActionsTypes.DISHES_LOADING:
            // whatever the state is and apply as modification what will be next 
            // no modification of the original state
            return {...state, isLoading:true, errMsg:null, dishes:[] }

        case ActionsTypes.DISHES_FAILED:
            return {...state, isLoading:false, errMsg: action.payload , dishes:[]}

        default:
            return (state);
    };
};