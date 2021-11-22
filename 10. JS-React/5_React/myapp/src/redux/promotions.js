// static json
import * as ActionsTypes from './ActionsTypes';

let defaultState = {
    isLoading: true,
    errMsg: null,
    promotions: []
}

export const Promotions = (state=defaultState, action) => {
    switch (action.type) {
        case ActionsTypes.ADD_PROMOS:
            return {...state, isLoading:false, errMsg:null, promotions: action.payload }

        case ActionsTypes.PROMOS_LOADING:
            // whatever the state is and apply as modification what will be next 
            // no modification of the original state
            return {...state, isLoading:true, errMsg:null, promotions:[] }

        case ActionsTypes.PROMOS_FAILED:
            return {...state, isLoading:false, errMsg: action.payload , promotions:[]}

        default:
            return (state);


    };
};