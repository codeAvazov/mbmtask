import React, { useContext } from "react";
import "./AppLoyout.scss";
import { Navbar } from "./Navbar/Navbar";
import { Main } from "./Main/Main";
import { Footer } from "./Footer/Footer";
import { useSpring, animated } from "react-spring";
import { taskContext } from "../ContextApi";
import { About } from "./About/About";

export const AppLayotu = () => {
  const { about } = useContext(taskContext);

  const fadee = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
    delay: 2500,
    config: {
      duration: 1000,
    },
  });

  const go_about_1 = useSpring({
    transform: about ? "translateX(-100%)" : "translateX(0%)",
    delay : 500,
    config: { duration: 1000 },
  });

  const go_about_2 = useSpring({
    transform: about
      ? "translateX(0%) translateY(-115%)"
      : "translateX(-110%) translateY(-115%)",
    delay: 500,
    config: { duration: 1000 },
  });

  return (
    <animated.div className="h-100" style={fadee}>
      <nav style={{ height: "13%" }}>
        <Navbar />
      </nav>
      <main style={{ height: "77%" }} className="position-relative">
        <animated.div className="h-100" style={go_about_1}>
          <Main />
        </animated.div>
        <animated.div className="h-100 w-50" style={go_about_2}>
          <About />
        </animated.div>
      </main>
      <footer style={{ height: "10%" }}>
        <Footer />
      </footer>
    </animated.div>
  );
};
