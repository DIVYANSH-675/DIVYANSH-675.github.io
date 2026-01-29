import React from "react";
import { useEffect, useState } from "react";
import "./Footer.scss";

const Footer = () => {

  return (
    <div className="footer text-center py-5">
      <div className="mb-2 text-[14px]">
        &#x3c;&#47;&#x3e; with ❤️ by
        <a href="https://DIVYANSH-675.github.io/" target="_blank" className="font-bold ml-1 hover:text-violet-500 transition-colors">
          Divyansh Gupta
        </a>
      </div>

      <div className='flex justify-center flex-col items-center text-[12px] text-secondary'>
        <p>
          &copy; 2026. All rights reserved.
        </p>
        <div className="mt-2 flex items-center gap-2">
          <span>No. of Visitors:</span>
          <img src="https://hitwebcounter.com/counter/counter.php?page=16641214&style=0006&nbdigits=4&type=page&initCount=3000" title="Counter Widget" alt="Visit counter For Websites" border="0" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
