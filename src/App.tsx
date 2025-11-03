import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import classesStyled from "./App.module.css";

function App() {
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={400}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="dark"
      />

      <div className={classesStyled.app}>
        <h1>GitHub Search</h1>
        <Outlet />
      </div>
    </>
  );
}

export default App;
