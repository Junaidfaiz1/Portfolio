"use client"

import Navbar from "./Navbar";

import { AnimatePresence } from "framer-motion";
import React from "react";
import {motion} from "framer-motion"
import { usePathname } from "next/navigation";


const Transition = ({ children }) => {
    const pathName = usePathname();
    return (
        <AnimatePresence mode="wait">
        
        <div key={pathName} className="w-screen h-screen bg-gradient-to-b from-blue-100 to-red-50 z-0 overflow-x-hidden">
        <motion.div
       
        className= "w-screen h-screen fixed bg-black rounded-b-[100px]  z-40 "
        animate= {{height: "0vh"}}
        exit={{height: "140vh"}}
        transition={{duration: 0.5, ease: "easeOut"}}
        
        />
         <motion.div
        className= "fixed m-auto top-0 left-0 right-0 bottom-0 z-50 text-white cursor-default w-fit h-fit  text-4xl font-bold"
       initial= {{opacity: 1}}
        animate= {{opacity: 0}}
        exit={{opacity: 0}}
        transition={{ duration: 0.8, ease: "easeOut"}}>
        {pathName.substring(1).toUpperCase() }
        </motion.div>

        <motion.div
        className= "w-screen h-screen fixed bg-black rounded-t-[100px] bottom-0  z-30 "
        initial= {{height: "140vh"}}
        animate={{height: "0vh"}}
        transition={{ delay: 0.5}}
        />
        <div className="h-24">
        <Navbar />
        </div>
        <div className="h-[calc(100vh-6rem)] ">
        {children}
        </div>
      </div>
      </AnimatePresence>
    );
    }

    export default Transition;