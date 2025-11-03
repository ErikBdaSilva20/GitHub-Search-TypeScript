import { Outlet } from "react-router-dom";

import classesStyled from "./App.module.css";

function App() {
  return (
    <div className={classesStyled.app}>
      <h1>GitHub Search</h1>
      <Outlet />
    </div>
  );
}

export default App;
