import React from 'react';
import './Dashboard.css'; 
import Navbar from './Navbar';

const Dashboard = () => {
  return (
    <>
    <Navbar/>
    <div className="dashboard-page">
      <main>
        <h1>Welcome to Your Dashboard</h1>
        <div className="dashboard-widgets">
          <div className="widget">
            <h2>Recent Orders</h2>
            <p>No recent orders to show.</p>
          </div>
          <div className="widget">
            <h2>Profile Overview</h2>
            <p>Manage your profile settings and preferences.</p>
          </div>
          <div className="widget">
            <h2>Settings</h2>
            <p>Configure your account settings.</p>
          </div>
        </div>
      </main>
    </div>
    </> 
  );
};

export default Dashboard;
