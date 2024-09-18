"use client";
import { createContext, useState, useEffect, useContext } from "react";
import beverageAPI from "@/utils/axiosInstance";

// create the context
const beverageContext = createContext();

// provide the context
export const BeverageProvider = ({ children }) => {
  const [beverages, setBeverages] = useState([]);

  useEffect(() => {
    beverageAPI.get("/beverages").then((response) => {
      console.log(response.data);
      setBeverages(response.data);
    });

    return () => {
      console.log("Cleanup");
    };
  }, []);

  return (
    <beverageContext.Provider value={{ beverages }}>
      {children}
    </beverageContext.Provider>
  );
};

// export custom hook to use our context
export const useBeverages = () => useContext(beverageContext);
