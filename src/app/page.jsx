"use client";
import Image from "next/image";
import beverageAPI from "@/utils/axiosInstance";
import { useEffect, useState } from "react";
import BeverageCard from "@/components/BeverageCard";
import { useBeverages } from "@/contexts/beverageContext";

export default function Home() {
  const { beverages } = useBeverages();
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
