import React from "react";
import Img from "../../assets/gossip.jpg";

const bgStyle = {
  background: `linear-gradient(black,rgba(0, 0, 0, 0.5)), url(${Img})`,
  backgroundRepeat: `no-repeat`,
  backgroundPosition: `center`,
  backgroundSize: `cover`,
};
const Header = () => {
  //rgba(0, 0, 0, 0.5)
  return (
    <header style={bgStyle}>
      <div className="header">
        <h1 className="header__title">Amebo Lounge</h1>
      </div>
    </header>
  );
};

export default Header;
