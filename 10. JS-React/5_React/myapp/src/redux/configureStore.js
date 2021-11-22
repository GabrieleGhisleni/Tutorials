import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

// redux for forms
import { createForms } from 'react-redux-form';

import {Dishes} from './dishes';
import {Comments} from './comment';
import {Promotions} from './promotions';
import {Leaders} from './leaders';
import { initialFeedback } from './forms';


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders,
            ...createForms({
                feedback: initialFeedback
            })
        }), 
        applyMiddleware(thunk, logger)
        );
    
    return store;
}