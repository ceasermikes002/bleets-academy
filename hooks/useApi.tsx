'use client'

import { useEffect } from "react";
import { setAuthToken } from "../lib/axios";

export const useApi = () => {
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setAuthToken(token);
    }
  }, []);
  
  return null;
};