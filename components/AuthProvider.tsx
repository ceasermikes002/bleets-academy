import { useEffect } from "react";
import { setAuthToken } from "../lib/axios";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setAuthToken(token);
    }
    
    return () => {
      setAuthToken(null);
    };
  }, []);
  
  return <>{children}</>;
};

export const useInitAuth = () => {
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setAuthToken(token);
    }
  }, []);
};