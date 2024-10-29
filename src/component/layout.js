import { Outlet } from "react-router-dom";
import './layout.css';
import { useState } from "react";
import { MenuIcon } from "./icon-component";
import { useNavigate } from 'react-router-dom';
// import Home from '../router/home';



export default function Layout() {
  const [showLeftMenu, setShowLeftMenu] = useState(false);

  const clickShowLeftMenu = () => {
    setShowLeftMenu(prev => !prev);
  };

  const navigate = useNavigate();
  
  return (
    <>
    <div className='navBar'>
      <MenuIcon onClick={clickShowLeftMenu}/>
    </div>
    <Outlet context={{showLeftMenu}}/>
    </>
  );
}