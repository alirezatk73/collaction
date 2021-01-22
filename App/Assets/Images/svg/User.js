import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgComponent(props) {
  return (
    <Svg
      width={35}
      height={35}
      viewBox="0 0 72 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M35.99 45.524c-12.939 0-23.99 2.04-23.99 10.2 0 8.163 10.983 10.275 23.99 10.275 12.94 0 23.991-2.037 23.991-10.2s-10.98-10.275-23.99-10.275z"
        fill="#200E32"
      />
      <Path
        opacity={0.4}
        d="M35.99 37.751a15.82 15.82 0 0015.876-15.876A15.82 15.82 0 0035.99 6a15.821 15.821 0 00-15.876 15.876A15.821 15.821 0 0035.99 37.751z"
        fill="#200E32"
      />
    </Svg>
  );
}

export default SvgComponent;
