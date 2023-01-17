import {NavLink, useLocation, useRoutes} from "react-router-dom";
import routes from "./routes";
import React from "react";
import {headerClass, navClass} from "./classes/listClasses";

const App = () => {
    const element = useRoutes(routes)

    return (
        <>
            <div className={headerClass}>App Layout</div>
            <NavLink to="/users" className={navClass} end> Users list Page </NavLink>
            {element}
        </>
    )
}

export default App;