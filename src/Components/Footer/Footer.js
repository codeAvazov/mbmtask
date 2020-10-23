import React from "react";
import st from "./Footer.module.scss";
import cl from "classnames";

export const Footer = () => {
  return (
    <div className={cl(st.footer)}>
      <div className={cl(st.footer_left)}>
        <div className={cl(st.footer_left_icons)}>
          <ul>
            <li>
              <a href="#3">
                <i className="fas fa-phone" />
              </a>
            </li>
            <li>
              <a href="#2">
                <i className="far fa-envelope" />
              </a>
            </li>
            <li>
              <a href="#1">
                <i className="fas fa-exclamation-circle" />
              </a>
            </li>
          </ul>
        </div>
        <div className={cl(st.footer_left_app)}>
          <a href="#0">Download App <i className="fas fa-download" /></a>
        </div>
      </div>
      <div className={cl(st.footer_btns)}>
        <div className={cl(st.footer_btns_btn)}>
          <button type="button">EN</button>
        </div>
        <div className={cl(st.footer_btns_btn, "border-left border-right")}>
          <button type="button">RU</button>
        </div>
        <div className={cl(st.footer_btns_btn, "actv")}>
          <button type="button" className="text-white">
            UZ
          </button>
        </div>
      </div>
    </div>
  );
};
