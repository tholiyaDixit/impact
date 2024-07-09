import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface managePopup {
    popup: string;
    show: boolean;
}

interface manageAppPopup {
    manageAppPopup: managePopup[]
}

const initialState: manageAppPopup = {
    manageAppPopup: [],
}

export const manageAppPopupSlice:any = createSlice({
    name: "manageAppPopup",
    initialState,
    reducers: {
        addPopup: (state, action: PayloadAction<{
            popup: string;
            show: boolean;
        }>) => {
            state.manageAppPopup.push({
                popup: action.payload.popup,
                show: action.payload.show
            })
        }
    }
})

export default manageAppPopupSlice.reducer
export const { addPopup } = manageAppPopupSlice.actions