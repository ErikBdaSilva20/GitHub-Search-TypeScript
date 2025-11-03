import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { HashRouter, Routes, Route } from "react-router-dom";

// Pages
import { Home } from "./routes/Home.tsx";
import Repos from "./routes/Repos.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="repos/:username" element={<Repos />} />
        </Route>
      </Routes>
    </HashRouter>
  </StrictMode>
);
