import React from "react";
import FetchData from "./components/FetchData";
import AddData from "./components/AddData";
import UpdateData from "./components/UpdateData";
import DeleteData from "./components/DeleteData";

const App = () => {
  return (
    <div>
      <h1>Supabase</h1>
      <FetchData />
      <AddData />
      <UpdateData />
      <DeleteData />
    </div>
  );
};

export default App;
