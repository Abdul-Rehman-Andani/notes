import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    active : false
}

const sidebarSlice = createSlice({
    name : "sidebar",
    initialState,
    reducers : {
        open : (state) => {
            state.active = true;
        },
        close : (state) => {
            state.active = false;
        }
    }
});

export default sidebarSlice.reducer;
export const {open , close} = sidebarSlice.actions;