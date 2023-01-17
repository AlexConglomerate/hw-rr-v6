import React from 'react';
import {headerClass, navClass} from "../classes/listClasses";
import {NavLink} from "react-router-dom";

function UsersList(props) {
    return (
        <div>
            <div className={headerClass}>User List Page</div>

            <div className={'flex flex-col w-[200px]'}>
                {[0, 1, 2, 3, 4, 5].map(num => (
                    <NavLink
                        to={`${num}/profile`}
                        state={{user: num}}
                        className={navClass}
                        end
                    > User {num} </NavLink>
                ))}
            </div>
        </div>
    );
}

export default UsersList;