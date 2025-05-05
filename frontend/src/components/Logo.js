import React from "react";
import logo from '../assest/logo.png'

const Logo = ({w,h}) => {
  return (
  <img
  src={logo}
  alt="App Logo"
  width={w}
  height={h}
  />);
};

export default Logo;
