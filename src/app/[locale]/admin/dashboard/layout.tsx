"use client"
import Sidebar from "@/ui/components/sidebars/Sidebar"
import { ReactNode } from "react"

 
export default function Layout({ children }:{
    children:ReactNode
}) {
  return (
    <>
     <Sidebar>
      <main>{children}</main>
     </Sidebar>
    </>
  )
}