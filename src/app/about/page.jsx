"use client"

import React from "react"
import Skills from "@/app/about/components/Skills"
import AboutMe from "./components/AboutMe"

const About=()=> {
  return(
    <div className=" bg-gradient-to-b from-blue-100 to-red-50">
    <AboutMe/>
  <Skills/>

</div>
  )
}
export default About