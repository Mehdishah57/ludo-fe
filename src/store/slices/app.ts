import { createSlice } from "@reduxjs/toolkit"

import { IAppState } from "../../types/slices"

const initialState: IAppState = {}

export const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {

    }
})

export const {

} = appSlice.actions
