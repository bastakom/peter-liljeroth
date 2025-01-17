"use client";
import { useEffect, useState } from "react";

const CookieConsent = () => {
  useEffect(() => {
    const cookieBotWrapper = document.getElementById("CookiebotWrapper");
    if (cookieBotWrapper) {
      const script = document.createElement("script");
      script.id = "CookieDeclaration";
      script.type = "text/javascript";
      script.async = true;
      script.src =
        "https://consent.cookiebot.com/d77505aa-9cc7-41af-a436-ed5e0458fb79/cd.js";

      cookieBotWrapper.appendChild(script);
    }
  }, []);

  return <div id="CookiebotWrapper" className="container m-auto mt-28"></div>;
};

export default CookieConsent;
