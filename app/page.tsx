"use client";
 
import { useEffect, useState } from "react";
import { BorderBeam } from "@/components/ui/border-beam";
import Particles from "@/components/ui/particles";
import { Icon } from "lucide-react";
import Image from "next/image";
import BlurIn from "@/components/ui/blur-in";
import IconCloud from "@/components/ui/icon-cloud";
import BlurFade from "@/components/ui/blur-fade";
import ShineBorder from "@/components/ui/shine-border";
 
const slugs = [
  "typescript",
  "javascript",
  "java",
  "react",
  "html5",
  "css3",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "figma",
];

export default function Home() {
  return (
    <div>
        <div className="text-white h-[750px] flex flex-col justify-center items-center">
          <div className="flex items-center">
            <BlurIn
            word = "ทำสิ่งที่คิดให้เป็นจริง"
            className="text-4xl font-bold "
              />
          </div>
        </div>
    
      <BlurFade delay={0.25} inView>
      <div className="max-w-[1400px] mx-auto">
        <ShineBorder
        className=" text-white relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-transparent md:shadow-xl"
      color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}>
        {/* <div className="border-2 rounded-xl text-white m bg-transparent"> */}
            <BorderBeam />
          <p className="text-2xl -mt-[18px] ml-11 px-2 bg-zinc-900 w-fit">เกี่ยวกับพวกเรา</p>
          <div className="flex justify-between gap-10">
            <div className="m-40">
              <p className="text-7xl">logo</p>
            </div>
            <div className="m-8 text-2xl">
                 <p>1liner คือทีมที่ก่อตั้งขึ้นโดยกลุ่มนักศึกษาที่มีความหลงใหลในการสร้างสรรค์งาน
                  ตั้งแต่งานเขียนโปรแกรมทั้วไปจนไปถึงระดับ software | website | media โดยเราจะส่งมอบงานที่ตอบโจทย์ลูกค้า
                  ด้วยความมุ่งมั่นในการสร้างผลงานระดับ Production ที่มีคุณภาพสูง และเราทุ่มเทเพื่อส่งมอบสิ่งที่ดีที่สุดในทุกโปรเจกต์</p>
            </div>
          </div>
        {/* </div> */}
        </ShineBorder>
      </div>

      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, omnis velit sunt eius commodi quaerat, itaque facere repellendus nobis vitae consequatur, doloribus non modi assumenda. Id totam distinctio natus fuga.</div>
      </BlurFade>
    </div>
  );
}
