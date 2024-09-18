"use client";
import Image from "next/image";
import beverageAPI from "@/utils/axiosInstance";
import { useEffect, useState } from "react";
import BeverageCard from "@/components/BeverageCard";

export default function Home() {
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
    <div>
      {beverages &&
        beverages.map((data, index) => {
          // console.log(data);
          return <BeverageCard key={index} beverage={data} />;
        })}
    </div>
  );
}
