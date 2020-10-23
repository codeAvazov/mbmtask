import React, { useContext } from "react";
import st from "./Main.module.scss";
import cl from "classnames";
import { useSpring, animated } from "react-spring";
import { taskContext } from "../../ContextApi";

export const Main = () => {
  const { setBat } = useContext(taskContext);

  const left = useSpring({
    from: {
      transform: "translate(-15px,-15px)",
    },
    to: {
      transform: "translate(0,0)",
    },
    delay: 3000,
    config: {
      duration: 500,
    },
  });

  return (
    <animated.div className={cl(st.main, "row")}>
      <div className="col-md-6 col-sm-12 p-0 d-flex align-items-center justify-content-around flex-column">
        <div className={cl(st.main_logo)}>Logo</div>
        <animated.div className={cl(st.main_text)} style={left}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
          fugit nesciunt vel dicta deserunt tempora aliquid molestias expedita.
          fugit nesciunt vel dicta deserunt
        </animated.div>
        <div>
          <a
            href="#3"
            className={cl("btn btn-outline-light", st.main_btn)}
            onClick={() => setBat(true)}
          >
            Batafsil
          </a>
        </div>
      </div>
      <div className="col-md-6 col-sm-12 p-0 "></div>
    </animated.div>
  );
};
