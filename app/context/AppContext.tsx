"use client";
import React, {
  createContext,
  useContext,
  useReducer,
  ReactNode,
  Dispatch,
} from "react";

interface ImageSrc {
  data: string;
  isMobile: boolean;
}

interface AppState {
  Image_src: ImageSrc;
  StarMode: string;
  StarColur: string;
  MobileMenu: boolean;
}

type Action =
  | { type: "SET_IMAGE_SRC"; payload: ImageSrc }
  | { type: "SET_STAR_MODE"; payload: string }
  | { type: "SET_STAR_COLUR"; payload: string }
  | { type: "SET_MOBILE_MENU"; payload: boolean };

const initialState: AppState = {
  Image_src: { data: "", isMobile: false },
  StarMode: "",
  StarColur: "",
  MobileMenu: false,
};

function appReducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case "SET_IMAGE_SRC":
      return { ...state, Image_src: action.payload };
    case "SET_STAR_MODE":
      return { ...state, StarMode: action.payload };
    case "SET_STAR_COLUR":
      return { ...state, StarColur: action.payload };
    case "SET_MOBILE_MENU":
      return { ...state, MobileMenu: action.payload };
    default:
      return state;
  }
}

const AppContext = createContext<{
  state: AppState;
  dispatch: Dispatch<Action>;
} | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(appReducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within AppProvider");
  }
  return context;
}
