import React from "react";
import HeroContainer from "../Hero";
import heroImage from '../../assets/real-state.jpg'


const Hero = () => {
  let slidesContent = [
    {
      img: heroImage,
      slide: "firstSlide",
      p: "Get the latest Blogs and feature stories on our businesses, community initiatives, heritage and people. Scroll to read.",
      heading: "Khansortium Blogs ",
      btn: "Read Stories",
    },
  ];
  return <HeroContainer slidesContent={slidesContent} />;
};

export default Hero;