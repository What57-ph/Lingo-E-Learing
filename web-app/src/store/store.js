import { configureStore } from "@reduxjs/toolkit";
import testListSlice from "../slice/testListSlice";


export const store = configureStore({
    reducer: {
        list: testListSlice,
    },
});
