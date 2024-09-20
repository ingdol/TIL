import { ToastContainer } from "react-toastify";
import AxiosDeploymentStatus from "./AxiosDeploymentStatus";
import QueryDeploymentStatus from "./QueryDeploymentStatus";

function App() {
  return (
    <>
      <AxiosDeploymentStatus />
      <QueryDeploymentStatus />
      <ToastContainer />
    </>
  );
}

export default App;
