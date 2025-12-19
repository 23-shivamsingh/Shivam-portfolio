"use client";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  const text = "LOADING";

  return (
    <div className={`preloader-wrapper ${!isLoading ? "hide" : ""}`}>
      <div className="loader-content">
        <h1 className="loader-text">
          {text.split("").map((char, index) => (
            <span
              key={index}
              className="loader-letter"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {char}
            </span>
          ))}
        </h1>
      </div>
    </div>
  );
}
