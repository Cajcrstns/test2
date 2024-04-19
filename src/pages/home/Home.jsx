import React, { useEffect, useRef } from "react";
import "./home.css";

import Transition from "../../components/transition/Transition";
import PortraitImg from "../../assets/images/home/flowSun.jpg";

import { gsap } from "gsap";

const Home = () => {
  const heroCopyReveal = useRef();
  const heroImageReveal = useRef();
  const heroTaglineReveal = useRef();

  useEffect(() => {
    heroCopyReveal.current = gsap.timeline({ paused: true }).to("h1", {
      top: "0",
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
      delay: 0.35,
    });

    heroImageReveal.current = gsap
      .timeline({ paused: true })
      .from(".hero-img", {
        y: "1000",
        duration: 1,
        ease: "power3.out",
        delay: 0.5,
      });

    heroTaglineReveal.current = gsap
      .timeline({ paused: true })
      .from(".hero-tagline", {
        opacity: 0,
        bottom: "-5%",
        duration: 1,
        ease: "power3.out",
        delay: 0.75,
      });

    heroCopyReveal.current.play();
    heroImageReveal.current.play();
    heroTaglineReveal.current.play();
  }, []);
  return (
    <div className="hero-section">
      <div className="hero-img">
        <img src={PortraitImg} alt="" />
      </div>
      <div className="hero-tagline">
        <h5>Expand your creativity. Rewind in the heart of Amsterdam.</h5>
        <p>Expand your creativity. Rewind in the heart of Amsterdam.</p>
      </div>
    </div>
  );
};

export default Transition(Home);
