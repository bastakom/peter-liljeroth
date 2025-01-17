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
        "https://consent.cookiebot.com/3289e7a8-ccf6-4717-bccd-7088f4a3c5c9/cd.js";

      cookieBotWrapper.appendChild(script);
    }
  }, []);

  return <div id="CookiebotWrapper" className="container m-auto mt-28"></div>;
};

export default CookieConsent;
