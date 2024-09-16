"use client"
import { usePathname } from "next/navigation"
import { ReactNode } from "react"
import { NavbarControlHidden } from "../config/navbar-control.config"

const NavbarControl = ({ children }: NavbarControlProps) => {
  const path = usePathname()
  console.log(NavbarControlHidden[path])
  if (NavbarControlHidden[path] >= 0) {
    return <></>
  }
  return <>{children}</>
}

type NavbarControlProps = {
  children: ReactNode
}

export default NavbarControl
