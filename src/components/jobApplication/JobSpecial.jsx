import React from 'react';
import dashboardImage from './assets/dashboardImage.png';

const Dashboard = ({ isOpen }) => {
    const dashboardStyle = {
        width: isOpen ? "calc(100% - 200px)" : "calc(100% - 50px)",
        margin: "0", // Set margin to 0 on all sides
        height: "580px",
        transition: "width 0.5s",
    };

    return (
        <div className='dashboard-image'>
            <img src={dashboardImage} alt="Dashboard" style={dashboardStyle} />
        </div>
    );
};

export default Dashboard;



