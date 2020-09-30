import React, { useState } from "react";
import useLocalStorage from "./useLocalStorage";

const useDarkMode = () => {
  const [darkMode, setDarkMode] = useLocalStorage("key");

  return [darkMode, setDarkMode];
};

export default useDarkMode;
