import Button from "./Button";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

import { useState } from "react";

export default function Todo(prop) {
  const [openModal, setOpenModal] = useState(false);

  const { text = "New Task" } = prop;

  function deleteHandler() {
    setOpenModal(true);
  }

  function closeModalHandler(){
    setOpenModal(false)
  }
  
  return (
    <div className="card">
      <h2>{text}</h2>
      <div className="del-container">
        <Button className="del" onClick={deleteHandler}>
          Delete
        </Button>
      </div>
      {openModal && <Modal />}
      {openModal && <Backdrop onClick={closeModalHandler}/>}
      {/* In javascript, if two statements are true, 
      the second statement will be returned 
       same as writing a ternary function --> 
       openModal ? <Modal/> : "null" -->
       if(openModal==='true'){return <Modal/>}
       else{return Null}*/}
    </div>
  );
}
