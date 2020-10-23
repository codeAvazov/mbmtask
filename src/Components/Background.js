import React, { useContext } from "react";
import st from "./Background.module.scss";
import cl from "classnames";
import way from "../Assets/way.png";
import mosque from "../Assets/mosque.png";
import moon from "../Assets/moon.png";
import tower from "../Assets/towers.png";
import little from "../Assets/littletowers.png";
import cloud from "../Assets/clouds.png";
import { useSpring, animated } from "react-spring";
import { taskContext } from "../ContextApi";

export const Background = () => {
  const { about, bat } = useContext(taskContext);

  const go_bottom = useSpring({
    from: {
      top: "-100%",
    },
    to: {
      top: "0%",
    },
    delay: 200,
    config: {
      duration: 1800,
    },
  });

  const go_top = useSpring({
    from: {
      bottom: "-100%",
    },
    to: {
      bottom: "0%",
    },
    delay: 200,
    config: {
      duration: 2000,
    },
  });

  const go_moon = useSpring({
    from: {
      top: "-100%",
    },
    to: {
      top: "0%",
    },
    delay: 500,
    config: {
      duration: 2000,
    },
  });

  const go_little = useSpring({
    from: {
      bottom: "-100%",
    },
    to: {
      bottom: "-7%",
    },
    delay: 700,
    config: {
      duration: 2000,
    },
  });

  const go_about_1 = useSpring({
    backgroundSize: about || bat ? "180%" : "110%",
    config: {
      duration: 1000,
    },
  });

  const go_about_2 = useSpring({
    bottom: about ? "-12%" : "0%",
    config: {
      duration: 1000,
    },
  });

  const go_about_3 = useSpring({
    transform: about ? "translateY(-100%)" : "translateY(0%)",
    delay: 500,
    config: { duration: 1000 },
  });

  const go_about_4 = useSpring({
    transform: about ? "translate(10%,14%)" : "translate(0%, 0%)",
    config: { duration: 1000 },
  });

  const go_about_5 = useSpring({
    transform: about ? "translate(10%,12.5%)" : "translate(0%, 0%)",
    config: { duration: 1000 },
  });

  const go_bat_1 = useSpring({
    transform: bat ? "translateY(30%)" : "translateY(0%)",
    config: {
      duration: 1000,
    },
  });

  const go_bat_2 = useSpring({
    transform: bat
      ? "translate(-15%, 30%) scale(0.8)"
      : "translate(0%, 0%) scale(1)",
    config: { duration: 1000 },
  });

  const go_bat_3 = useSpring({
    transform: bat ? "translate(-16%, 55%) scale(0.8)" : "translate(0%, 0%) scale(1)",
    config: { duration: 1000 },
  });

  const fadee = useSpring({
    opacity: bat ? 1 : 0,
    config: { duration: 1000 },
  });

  return (
    <animated.div className={cl(st.background)} style={go_about_1}>
      <animated.div className={cl(st.background_cloud)} style={go_bottom}>
        <animated.img src={cloud} alt="#" style={go_about_3} />
      </animated.div>
      <animated.div className={cl(st.background_moon)} style={go_moon}>
        <animated.div className="w-100 h-100" style={go_about_5}>
          <img src={moon} alt="#" />
        </animated.div>
      </animated.div>
      <animated.div
        className={cl(st.background_mosque, bat && cl(st.actv))}
        style={go_top}
      >
        <animated.div className="w-100 h-100" style={go_about_4}>
          <animated.div className="h-100" style={go_bat_2}>
            <img src={mosque} alt="#" />
          </animated.div>
        </animated.div>
      </animated.div>
      <animated.div
        className={cl(st.background_tower, bat && cl(st.actv))}
        style={go_top}
      >
        <animated.div className="w-100 h-100" style={go_about_5}>
          <animated.div className="h-100" style={go_bat_3}>
            <img src={tower} alt="#" />
          </animated.div>
        </animated.div>
      </animated.div>
      <animated.div
        className={cl(st.background_little, bat && cl(st.actv))}
        style={go_little}
      >
        <animated.div className="w-100 h-100" style={go_about_4}>
          <animated.div className="h-100" style={go_bat_2}>
            <img src={little} alt="#" />
          </animated.div>
        </animated.div>
      </animated.div>
      <animated.div className={cl(st.background_way)} style={go_about_2}>
        <animated.div className="h-100" style={go_bat_1}>
          <img src={way} alt="#" />
        </animated.div>
      </animated.div>
      <animated.div className={cl(st.background_text)} style={fadee}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad corporis
        sequi eaque repudiandae, ex esse, quibusdam, sed autem deleniti ab
        architecto ullam sapiente a similique reprehenderit possimus! Nostrum
        quod animi, soluta blanditiis dolore eveniet rem quos ad earum totam non
        cumque velit laudantium, facere iure praesentium ea minus libero neque
        omnis sit veritatis consequuntur explicabo aut? At impedit facilis, ex
        voluptatibus optio asperiores quia esse velit accusantium fuga. Expedita
        culpa provident exercitationem error? Reprehenderit officiis ullam
        autem, laudantium praesentium fugiat totam deserunt odit minus explicabo
        repellendus ex rerum aut enim fuga dolore doloremque quo ab velit! In
        adipisci odio earum quibusdam, porro nobis saepe laborum quo ratione aut
        voluptatem error eius iure aperiam enim deserunt commodi officia
        consequatur corporis quas assumenda? Blanditiis, dignissimos sit! Quo
        tempore accusamus et enim minima nostrum porro debitis voluptas
        perspiciatis voluptatum ut labore similique ipsum minus mollitia vel nam
        esse delectus rerum, repellat ratione? Cupiditate, at neque. Modi
        provident numquam totam veritatis laboriosam incidunt minima id, neque
        eaque. Dolores omnis doloremque voluptates molestiae nesciunt mollitia,
        eum blanditiis eligendi illo iure porro reprehenderit, consectetur
        incidunt suscipit ea sint possimus repellendus quas quis aliquid.
        Consequuntur quia eligendi quos omnis sunt sed aspernatur explicabo quod
        nihil delectus. Vel et quo nobis ducimus fugit soluta non facere, est
        culpa dolor magnam, sequi enim pariatur. Tempore natus delectus eveniet
        libero. Laborum ipsam est modi nisi corporis dolorum facere beatae
        impedit temporibus placeat molestiae, accusantium reprehenderit aliquam
        distinctio laudantium consectetur labore. Optio nihil nulla tenetur
        ratione laboriosam, repudiandae cum expedita eveniet a impedit ab id
        quas harum asperiores voluptatum odit officiis. Ipsam ab saepe rerum
        
      </animated.div>
    </animated.div>
  );
};
