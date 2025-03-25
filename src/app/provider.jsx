"use client";

import { Provider } from "react-redux";
import { makeStore } from "./store/store";
import { useMemo } from "react";

export function Providers({ children }) {
  const store = useMemo(() => makeStore(), []);

  return <Provider store={store}>{children}</Provider>;
}
