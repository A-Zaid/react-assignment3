import { useState } from "react";
import Contact from "./components/Contact";
import Sidebar from "./components/Sidebar";
import Welcome from "./components/Welcome";


function App() {
  const [showModal, setShowModal] = useState(false);
  const [open, setOpen] = useState(false);

  function handleOpenClose(){
      open ? setOpen(false) : setOpen(true);
  }

  function closeModal() {
    setShowModal(false);
  }
  function openModal() {
    setShowModal(true);
  }

  return (
    <>
     <Sidebar open={open} handleOpenClose={handleOpenClose} openModal={openModal} /> 
      <Welcome openModal={openModal} />
      {showModal && <Contact closeModal={closeModal} />}
    </>
  );
}

export default App;
