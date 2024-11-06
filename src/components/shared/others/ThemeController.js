"use client";
import { useEffect } from "react";

const ThemeController = () => {
  useEffect(() => {
    document.documentElement.classList.remove("is_dark");

    // Dark to light mode js
    const lightToDarkButton = document.getElementById("light--to-dark-button");
    lightToDarkButton?.addEventListener("click", function () {
      if (localStorage.getItem("theme-color")) {
        if (localStorage.getItem("theme-color") === "light") {
          document.documentElement.classList.add("is_dark");
          localStorage.setItem("theme-color", "dark");
          lightToDarkButton?.classList.add("dark--mode");
        } else {
          document.documentElement.classList.remove("is_dark");
          localStorage.setItem("theme-color", "light");
          lightToDarkButton?.classList?.remove("dark--mode");
        }
      } else {
        if (document.documentElement.classList.contains("is_dark")) {
          document.documentElement.classList.remove("is_dark");
          lightToDarkButton?.classList?.remove("dark--mode");
          localStorage.setItem("theme-color", "light");
        } else {
          document.documentElement.classList.add("is_dark");
          localStorage.setItem("theme-color", "dark");
          lightToDarkButton?.classList.add("dark--mode");
        }
      }
    });
  }, []);

};

export default ThemeController;
