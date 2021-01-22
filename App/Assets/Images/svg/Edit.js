import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgComponent(props) {
  return (
    <Svg
      width={18}
      height={18}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M0 31.713v8.282h8.281l24.435-24.436-8.28-8.281L0 31.713z"
        fill="#C7C7C7"
      />
      <Path
        d="M0 31.713v8.282h8.281l24.435-24.436-8.28-8.281L0 31.713z"
        fill="#C7C7C7"
      />
      <Path
        d="M0 31.713v8.282h8.281l24.435-24.436-8.28-8.281L0 31.713zM39.099 6.052L33.942.896a2.213 2.213 0 00-3.125 0l-4.041 4.041 8.281 8.281 4.041-4.04a2.213 2.213 0 000-3.126z"
        fill="#C7C7C7"
      />
      <Path
        d="M39.099 6.052L33.942.896a2.213 2.213 0 00-3.125 0l-4.041 4.041 8.281 8.281 4.041-4.04a2.213 2.213 0 000-3.126z"
        fill="#C7C7C7"
      />
      <Path
        d="M39.099 6.052L33.942.896a2.213 2.213 0 00-3.125 0l-4.041 4.041 8.281 8.281 4.041-4.04a2.213 2.213 0 000-3.126z"
        fill="#C7C7C7"
      />
    </Svg>
  );
}

export default SvgComponent;
