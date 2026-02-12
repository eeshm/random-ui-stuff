"use client"
import { motion } from "framer-motion"

function ClipPath() {
    return (
        <div className="w-full h-80  flex items-center justify-center relative">
            <h2 className="text-7xl w-full h-full items-center font-bold bg-black text-white flex justify-center">Hello eesh</h2>
            <motion.h2 className="text-7xl w-full h-full items-center font-bold bg-white text-black flex justify-center absolute inset-0" 
            initial={{
                clipPath: "inset(0 0 0% 0)"
            }}
            animate={{
                clipPath: "inset(0 0 100% 0)"
            }}
            transition={{
                duration:1,
                type:"spring",
                damping:20,
                stiffness:100
            }}
            >Hello eesh</motion.h2>
        </div>
    )
}

export default ClipPath;