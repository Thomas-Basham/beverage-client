"use client";
import Image from "next/image";
import beverageAPI from "@/utils/axiosInstance";
import { useEffect, useState } from "react";
import BeverageCard from "@/components/BeverageCard";
import { useBeverages } from "@/contexts/beverageContext";
import { Suspense } from "react";

export default function Home() {
  const { beverages } = useBeverages();
  return (
    <Suspense fallback={Loading}>
      <div>
        {beverages &&
          beverages.map((data, index) => {
            // console.log(data);
            return <BeverageCard key={index} beverage={data} />;
          })}
      </div>
    </Suspense>
  );
}

export const Loading = <h2>Loading... </h2>;
