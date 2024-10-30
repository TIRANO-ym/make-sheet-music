import { Outlet } from "react-router-dom";
import './layout.css';
import { useState } from "react";

export default function Layout() {
  return (
    <>
    <Outlet context={{}}/>
    </>
  );
}