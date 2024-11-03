import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full h-16 bg-transparent text-white item-center">
    <div className="z-50 px-16 flex h-16 justify-between w-full absolute ">
      <div className="h-full flex">
        <button className="text-2xl">1liner</button>
      </div>
      <div className = "flex justify-center gap-10">
        <button className="">About us</button>
        <button className="">Product</button>
        <button className="">Contract</button>
        <button className=""><Icon icon={"teenyicons:instagram-outline"}/> </button>
      </div>
    </div>
    <div className=" z-[5000] w-full h-16 absalute backdrop-blur-xl">
    </div>
  </nav>
  )
}
