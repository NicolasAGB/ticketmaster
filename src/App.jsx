import { useState } from "react";
import Navbar from "./components/Navbar";
import Events from "./components/Events";
import { SingupForm } from "./components/SignupForm";
import "./App.css";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const handleNavbarSearch = (value) => {
    setSearchValue(value);
  };

  return (
    <>
      <Navbar onSearch={handleNavbarSearch} />
      <Events searchValue={searchValue} />
      <SingupForm />
    </>
  );
}

export default App;
