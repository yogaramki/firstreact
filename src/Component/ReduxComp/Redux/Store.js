import { configureStore } from "@reduxjs/toolkit";
import Counterreducer from "./Slice/CounterSlice";

export const Store=configureStore({
    reducer:{
        counter:Counterreducer
    }
})