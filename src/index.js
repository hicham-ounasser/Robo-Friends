import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Card from "./Card";
import reportWebVitals from "./reportWebVitals";
import "tachyons";

// ✅ Correct way for React 18:
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Card />);

reportWebVitals();
