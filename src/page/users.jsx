import React from 'react';
import {NavLink, Outlet, useLocation, useRoutes} from "react-router-dom";
import routes from "../routes";
import {headerClass, navClass} from "../classes/listClasses";

function Users(props) {
    const element = useRoutes(routes)

    return (
        <div>
            <div className={headerClass}>Users Layout</div>
            <NavLink to='/' className={navClass} end> Main Page</NavLink>
            <Outlet/>
        </div>
    );
}

export default Users;