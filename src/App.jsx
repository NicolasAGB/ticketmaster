import { useState } from "react";
import Navbar from "./components/Navbar";
import Events from "./components/Events";
import "./App.css";

function App() {
  const [searchValue, setSearchValue] = useState('');
  const handleNavbarSearch = (value) => {
    setSearchValue(value);
  };


  return (
    <>
      <Navbar onSearch={handleNavbarSearch} />
      <Events searchValue={searchValue}/>
    </>
  );
}

export default App;
