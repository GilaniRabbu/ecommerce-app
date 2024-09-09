import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Spinner.css";

const Spinner = () => {
  const [count, setCount] = useState(5);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevValue) => --prevValue);
    }, 1000);
    count === 0 &&
      navigate("/login", {
        state: location.pathname,
      });
    return () => clearInterval(interval);
  }, [count, navigate, location]);

  return (
    <div>
      <h1 className="text-center text-3xl mt-20 mb-5">
        redirecting to you in {count} second
      </h1>
      <div className="sk-chase">
        <div className="sk-chase-dot" />
        <div className="sk-chase-dot" />
        <div className="sk-chase-dot" />
        <div className="sk-chase-dot" />
        <div className="sk-chase-dot" />
        <div className="sk-chase-dot" />
      </div>
    </div>
  );
};

export default Spinner;
