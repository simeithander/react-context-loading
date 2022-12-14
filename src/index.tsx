import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import RoutesPath from "./routes";
import ContextProvider from "./Contexts/Global";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ChakraProvider>
    {/* Context Global da aplicação */}
    <ContextProvider>
      <React.StrictMode>
        <RoutesPath />
      </React.StrictMode>
    </ContextProvider>
  </ChakraProvider>
);

export const sleep = async (ms = 3000) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
