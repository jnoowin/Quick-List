import React, { useContext } from "react";
import { TodoContext } from "../../Main";
import "./Navbar.css";
import { signOut } from "../../firebase/auth";
import { Link, useLocation } from "react-router-dom";

export default function Navbar({ children }) {
  const pathname = useLocation().pathname;
  const { dispatch } = useContext(TodoContext);

  const handleClick = () => {
    signOut();
    dispatch({ type: "CLEAR_TODOS" });
    localStorage.setItem("guest", "false");
  };

  return (
    <div className="navbar">
      <header className="head">
        <div style={{ flex: 1 }}>
          <Link className="title" to={"/app"}>
            Quick-List
          </Link>
        </div>
        <li>
          <Link className="li" to="/about">
            about
          </Link>
        </li>
        {pathname === "/app" && (
          <li onClick={handleClick}>
            <Link className="li" to="/">
              logout
            </Link>
          </li>
        )}
      </header>
      <div>{children}</div>
    </div>
  );
}
