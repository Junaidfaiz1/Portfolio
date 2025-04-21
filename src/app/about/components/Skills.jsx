"use client"

import React from "react"
import { motion } from "framer-motion"


const Skills=()=> {
return(
    <div className="w-[23rem] py-8  lg:w-full md:w-[42rem] mx-auto  " >
    
{/* My Skills Section */}
<motion.div
initial={{ opacity: 0 }}
whileInView={{ opacity: 1 }}
viewport={{ once: true }}
transition={{ duration: 0.8 }}
className="max-w-5xl  mx-auto mb-20  "
>
<h2 className="text-3xl font-bold text-center text-gray-900 mb-12">My Skills</h2>

<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {[
        { name: "React.js", level: 95 },
        { name: "Next.js", level: 95 },
        { name: "Node.js", level: 92 },
        { name: "Express.js", level: 93 },
        { name: "RESTful APIs", level: 90 },
        { name: "MongoDB", level: 90 },
        { name: "Tailwind CSS", level: 94 },
        { name: "Shadcn", level: 94 },
        { name: "React Redux Toolkit", level: 85 },
        { name: "Responsive Design", level: 95 },
    ].map((skill, index) => (
        <div key={index} className="">
            <div className="flex justify-between mb-1">
                <span className="text-base font-medium text-gray-800">{skill.name}</span>
                <span className="text-sm font-medium text-emerald-600">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 dark:bg-gray-700">
                <div
                    className="bg-emerald-500 h-3 rounded-full transition-all duration-1000 ease-in-out"
                    style={{ width: `${skill.level}%` }}
                ></div>
            </div>
        </div>
    ))}
</div>
</motion.div>

</div>
)
}
export default Skills