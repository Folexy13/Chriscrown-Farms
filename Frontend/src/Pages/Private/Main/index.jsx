import React from "react";
import "./Styles.scss";
import { Card, DashboardLayout } from "../../../components";
const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="main">
        <div className="flex">
          <Card />
          <Card />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
