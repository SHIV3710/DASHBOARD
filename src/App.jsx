import logo from './logo.svg';
import './App.css';
import { SignIN } from './Pages/SignIN';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import { DashBoard } from './Pages/DashBoard';
import AddProfile from './Components/AddProfile';
const App = createBrowserRouter([
  {
    path: "/",
    element: <SignIN/>
  },
  {
    path: "/DashBoard",
    element: <DashBoard/>,
  },
]);

export default App;
