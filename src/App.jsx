
import { AddUserForm } from './components/AddUserForm'
import { Home } from './components/Home'
import { useRoutes } from "react-router-dom";

export function App() {
  
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "addUser", element: <AddUserForm /> }
  ]);
  return routes;
}