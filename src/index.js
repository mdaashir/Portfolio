/**
 * Entry point of application, where App is rendered within the div with the id of "app"
 */

import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const appElement = document.getElementById("app");
const root = createRoot(appElement ? appElement : document.createElement("div"));
root.render(<App />);
