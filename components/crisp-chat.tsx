"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("6f3628ef-8726-473b-9d6c-4de77a737058");
  }, []);

  return null;
};
