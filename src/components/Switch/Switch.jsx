import React from "react";
import "./Switch.css";
import { Sun, Moon } from "./Icons.styled";
import { useTheme } from "hooks";
import { toogleTheme } from "redux/theme/themeSlice";
import { useDispatch } from "react-redux";

function Switch() {
  const dispatch = useDispatch();
  const theme = useTheme();

  return (

    <div className='switch-container'>
        <Sun/>
        <label className="toggle-switch">
          <input type="checkbox" checked={theme} onChange={()=>dispatch(toogleTheme())} />
          <span className="switch" />
        </label>
        <Moon/>
    </div>
  );
}
export default Switch;