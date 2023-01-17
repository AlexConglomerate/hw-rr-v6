import Users from "./page/users";
import MainPage from "./page/mainPage";
import {Navigate, Outlet} from "react-router-dom";
import User from "./page/user";
import UsersList from "./page/usersList";
import Edit from "./page/edit";

const routes = [
    {path: '/', element: <MainPage/>},
    {path: '*', element: <Navigate to={'/'}/>},
    {
        path: '/users', element: <Users/>, children: [
            {path: '', element: <UsersList/>},
            {
                path: ':userId', element: <Outlet/>, children: [
                    {path: 'profile', element: <User/>},
                    {path: 'edit', element: <Edit/>},
                    {index: true, element: <Navigate to='./profile'/>},
                    {path: "*", element: <Navigate to='../profile'/>},
                ]
            }
        ]
    },
]

export default routes