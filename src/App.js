import React, { useContext } from "react";
import "./global.scss";
import { AppLayotu } from "./Components/AppLayotu";
import { Background } from "./Components/Background";
import { taskContext } from "./ContextApi";
import { useSpring, animated } from "react-spring";

function App() {
  const { bat, setBat } = useContext(taskContext);

  const arrow = useSpring({
    opacity: bat ? 1 : 0,
    config: { duration: 1000 },
  });

  const fade = useSpring({
    opacity: !bat ? 1 : 0,
    config: { duration: 1000 },
  });

  return (
    <div className="global">
      <div className="bg">
        <Background />
      </div>
      <div className="app">
        <animated.div className="h-100" style={fade}>
          <AppLayotu />
        </animated.div>
      </div>
      <animated.i
        className="fas fa-long-arrow-alt-left icon"
        onClick={() => setBat(!bat)}
        style={arrow}
      />
    </div>
  );
}

export default App;
