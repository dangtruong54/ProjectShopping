import * as type from './../constants/index';

const defaultState = 'Updated';

const message = (state = defaultState, action) => {
    switch(action.type){
        case type.ADD_PRODUCT:  
            return type.ADD;
        case type.EDIT_PRODUCT:  
            return type.UPDATE;
        case type.DELETE_PRODUCT:  
            return type.DELETE;
        default:
            return state;
    }
}

export default message;