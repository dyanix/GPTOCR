"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("4605f0be-4961-4dae-a036-995b88b88c07");
  }, []);

  return null;
};