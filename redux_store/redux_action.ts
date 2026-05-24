import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "./redux_store";

export interface actionState {
  Image_src: {
    data: string;
    isMobile: boolean;
  };
  StarMode: string;
  StarColur: string;
  MobileMenu: boolean;
}

const initialState: actionState = {
  Image_src: {
    data: "",
    isMobile: false,
  },
  StarMode: "",
  StarColur: "",
  MobileMenu: false,
};

export const actionSlice = createSlice({
  name: "action",
  initialState,
  reducers: {
    set_Image_src: (
      state: actionState,
      action: { payload: any; type: string }
    ) => {
      state.Image_src = action.payload;
    },
    setStarMode: (
      state: actionState,
      action: { payload: any; type: string }
    ) => {
      state.StarMode = action.payload;
    },
    setStarColur: (
      state: actionState,
      action: { payload: any; type: string }
    ) => {
      state.StarColur = action.payload;
    },
    setMobileMenu: (
      state: actionState,
      action: { payload: any; type: string }
    ) => {
      state.MobileMenu = action.payload;
    },
  },
});

export const {
  set_Image_src,
  setStarMode,
  setStarColur,
  setMobileMenu,
} = actionSlice.actions;

export const Image_src_data = (state: RootState) => state.action.Image_src;
export const StarMode_data = (state: RootState) => state.action.StarMode;
export const StarColur_data = (state: RootState) => state.action.StarColur;
export const MobileMenu_data = (state: RootState) => state.action.MobileMenu;

export default actionSlice.reducer;
