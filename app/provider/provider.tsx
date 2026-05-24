"use client";
import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "../../redux_store/redux_store";

function Provider({ children }: { children: React.ReactNode }) {
  return (
    <ReduxProvider store={store}>
      {children}
    </ReduxProvider>
  );
}

export default Provider;
