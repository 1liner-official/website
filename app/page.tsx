"use client";
 
import { useEffect, useState } from "react";

import Particles from "@/components/ui/particles";


import { Icon } from "lucide-react";
import Image from "next/image";
import BlurIn from "@/components/ui/blur-in";



export default function Home() {
  return (
    <div>
      <div className="text-white h-[750px] flex flex-col justify-center items-center">
        <div className="flex items-center">
        <BlurIn
        word = "Make your custom software/website"
        className="text-4xl font-bold "
          />
        </div>
      </div>
      <div className=" bg-white border">
      </div>
    </div>
  );
}
