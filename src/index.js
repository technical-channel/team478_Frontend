import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Web3ReactProvider } from "@web3-react/core";
import { ethers } from "ethers";
import App from "./App";
function getLibrary(provider) {
  const library = new ethers.providers.Web3Provider(provider);
  console.log(library);
  library.pollingInterval = 12000; // frequency provider is polling
  return library;
}
ReactDOM.render(
  <Web3ReactProvider getLibrary={getLibrary}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Web3ReactProvider>,
  document.getElementById("root")
);
