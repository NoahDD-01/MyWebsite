import React from 'react'
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Page ပြောင်းတိုင်း Scroll ကို အပေါ်ဆုံး (0,0) ပို့ပေးမည်
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;