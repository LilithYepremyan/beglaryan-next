"use client";

import { Provider } from "react-redux";
import { makeStore } from "./store/store";
import { useMemo } from "react";
import { ThemeProvider } from "@mui/material";
import theme from "@/theme";

// const store = useMemo(() => makeStore(), []);
const store = makeStore();
export function Providers({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>{children}</Provider>
    </ThemeProvider>
  );
}
