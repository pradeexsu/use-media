'use client';

import React from "react";
import { MediaApplicationContext } from "./MediaApplicationProvider";

export const useMedia = () => {
  const context = React.useContext(MediaApplicationContext);
  if (!context) {
    throw new Error("useMediaApplication must be used within a MediaProvider");
  }
  return context;
};
