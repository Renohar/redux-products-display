import {productReducer, selectProductReducer} from "./productReducer"
import {combineReducers} from "redux"

const reducers = combineReducers(
    {
        allProducts : productReducer,
        product: selectProductReducer
    }
)

export default reducers