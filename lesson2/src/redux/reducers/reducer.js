import {combineReducers} from "redux"
import titleReducer from "./titleReducer"
import usersReducer from "./usersReducer"
import inputReducer from "./inputReducer"


export const rootReducer=combineReducers({
    titleReducer,
    usersReducer,
    inputReducer    

})