'use client'

import { useState } from "react"
import { Button } from "./ui/button"

export default function NotificationBar(){
    const [isOpen,setIsOpen]=useState(true)
    return(
        <div className={`w-full h-[50px] bg-notification text-center justify-center items-center gap-6 text-white ${isOpen?" flex":" hidden"}`}>GET 15% OFF & FREE SHIPPING | USE CODE 'Save15' <Button className=" text-black text-lg bg-yellow font-extralight hover:bg-yellow/80 rounded-sm px-4">Show Now</Button></div>
    )
}