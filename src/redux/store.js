import { configureStore } from '@reduxjs/toolkit'
import reducers from "./reducers/index"

const store = configureStore({
    reducer :{
        reducer : reducers
    }
});

export default store;