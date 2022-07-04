import { useState } from "react";
import AddTaskForm from "./AddTaskForm";

const Header = () => {
  const [show, setShow] = useState(false);
  const [btnStyle, setBtnStyle] = useState({
    name: "SHOW ADD TASK BAR",
    bgColor: "purple",
  });

  const handleShow = () => {
    if (show) {
      setBtnStyle({
        name: "SHOW ADD TASK BAR",
        bgColor: "green",
      });
    } else {
      setBtnStyle({
        name: "CLOSE ADD TASK BAR",
        bgColor: "red",
      });
    }
    setShow(!show);
  };

  return (
    <header className="header">
      <h1>TASK TRACKER</h1>
      <button
        onClick={handleShow}
        className="btn"
        style={{ backgroundColor: btnStyle.bgColor }}
      >
        {btnStyle.name}
      </button>
      {show && <AddTaskForm />}
    </header>
  );
};

export default Header;
