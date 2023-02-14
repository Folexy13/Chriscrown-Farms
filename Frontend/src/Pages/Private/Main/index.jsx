import React, { useState } from "react";
import "./Styles.scss";
import { DashboardLayout, Modal, Table } from "../../../components";
import { FiPlus } from "react-icons/fi";
const Dashboard = () => {
  const [show, setShow] = useState(false);
  const [title, settitle] = useState('');
  const handleShow = () => {
    setShow(!show);
  };
  return (
    <DashboardLayout>
      <div className="main">
        <div className="button" onClick={handleShow}>
          <FiPlus fontWeight={800} />
          Add Product
        </div>
        <Table width={"100%"} />
      </div>
      <Modal isOpen={show} close={handleShow} trigger={handleShow}>
       <form action="">
        <div className="form-control">
        <label htmlFor="title">title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(event) => settitle(event.target.value)}
        />
        </div>
       </form>
      </Modal>
    </DashboardLayout>
  );
};

export default Dashboard;
