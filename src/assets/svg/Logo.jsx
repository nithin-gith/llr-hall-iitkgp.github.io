import { height } from "@mui/system";
import * as React from "react";

function SvgComponent(props) {
  return (
    // <svg xmlns="http://www.w3.org/2000/svg" width={27} height={40} viewBox="0 0 27 40" {...props}>
    //   <g data-name="Group 101" transform="translate(-375 -21)">
    //     <rect data-name="Rectangle 16" width={13} height={8} rx={4} transform="translate(375 53)" fill="#f40051" />
    //     <rect data-name="Rectangle 11" width={20} height={8} rx={4} transform="translate(382 21)" fill="#f2b300" />
    //     <rect data-name="Rectangle 15" width={20} height={8} rx={4} transform="translate(382 37)" fill="#7620ff" />
    //     <rect data-name="Rectangle 12" width={8} height={8} rx={4} transform="translate(375 29)" fill="#4cd5c5" />
    //   </g>
    // </svg>
    <img src = "https://media-exp1.licdn.com/dms/image/C560BAQHw-4g5gCexcw/company-logo_200_200/0/1591290231258?e=2159024400&v=beta&t=lAcfG5Dz7EyzPIwMB3kCMBt_HomhI2YL21D9CMHLDOo" alt="hall_logo" style = {{width:"80px",height:"80px",borderRadius:"10%"}} ></img>
  );
}

export default SvgComponent;
