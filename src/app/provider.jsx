"use client";

import { Provider } from "react-redux";
import { makeStore } from "./store/store";
import { useMemo } from "react";
import { ThemeProvider } from "@mui/material";
import theme from "@/theme";

export function Providers({ children }) {
  const store = useMemo(() => makeStore(), []);

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>{children}</Provider>
    </ThemeProvider>
  );
}
