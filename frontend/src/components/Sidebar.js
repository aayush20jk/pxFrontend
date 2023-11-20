import React from 'react';
import './Sidebar.css';
import { FaHome, FaRegUserCircle, FaSearch, FaDoorOpen, FaBell } from "react-icons/fa";

function Sidebar() {
  return (
    <div className='sidebar' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '10%' }}>
        <button className='iconTextContainer'>
            <FaHome className='sidebarIcon' />
            <span className='textIcon'>Home</span>
        </button>

        <button className='iconTextContainer'>
            <FaSearch className='sidebarIcon' />
            <span className='textIcon'>Find</span>
        </button>

        <button className='iconTextContainer'>
            <FaRegUserCircle className='sidebarIcon' />
            <span className='textIcon'>Profile</span>
        </button>

        <button className='iconTextContainer'>
            <FaBell className='sidebarIcon notif' />
            <span className='textIcon'>Notification</span>
        </button>

        <button className='iconTextContainer'>
            <FaDoorOpen className='sidebarIcon logout' />
            <span className='textIcon'>Log Out</span>
        </button>
    </div>
  )
}

export default Sidebar;