import React from 'react';
import Sidebar from "./Sidebar";
import {Outlet} from "react-router-dom";

const Layout = () => {
	return (
		<div style={{width: '100%', height: '100vh', display: 'flex'}}>
			<Sidebar />
			<Outlet />
		</div>
	);
};

export default Layout;