import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    model : false
}

const modelSlice = createSlice({
    name : "model",
    initialState,
    reducers : {
        open : (state) => {
            state.model = true;
        },
        close : (state) => {
            state.model = false;
        }
    }
});

export default modelSlice.reducer;
export const {open, close} = modelSlice.actions;