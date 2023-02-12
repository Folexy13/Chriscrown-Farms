import React, { useState } from "react";
import "./Styles.scss";
import { DashboardLayout, Table } from "../../../components";
import { FiPlus } from "react-icons/fi";
const Dashboard = () => {
  const [show, setShow] = useState(false);
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
    </DashboardLayout>
  );
};

export default Dashboard;
