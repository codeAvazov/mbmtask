import React, { useContext } from "react";
import st from "./Navbar.module.scss";
import cl from "classnames";
import {taskContext} from "../../ContextApi";

export const Navbar = () => {
  const { setAbout, about } = useContext(taskContext);
  return (
    <div className={cl(st.navbar)}>
      <ul className={cl(st.navbar_list)}>
        <li className={cl(st.navbar_list_item)} onClick={() => setAbout(!about)}>
          About us
        </li>
        <li className={cl(st.navbar_list_item)}>
          <span>Let`s go</span>
        </li>
      </ul>
    </div>
  );
};
