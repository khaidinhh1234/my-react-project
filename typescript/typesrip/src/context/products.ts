import React, { createContext } from "react";

export const ProductsContext = createContext(
  {} as { id: number; name: string; price: number }
);
