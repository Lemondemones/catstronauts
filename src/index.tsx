import React from "react";
import { createRoot } from "react-dom/client";
import GlobalStyles from "./styles";
import Pages from "./pages";
import { ApolloProvider } from "@apollo/client";

import { client } from "./shared/api/appoloCli";

const root = createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <GlobalStyles />
      <Pages />
    </ApolloProvider>
  </React.StrictMode>
);
