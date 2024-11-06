import * as React from "react";

import sheglowImage from './sheglow.png';

function SvgComponent(props) {
  return (
    <img src={sheglowImage} alt="logo" width={70} height={70} />
  );
}

export default SvgComponent;
