import { ReactNode, useEffect } from "react"
import { useLocation } from "react-router-dom"

const ScrollTop = ({ children }: ScrollTopProps) => {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])
  return children
}

type ScrollTopProps = {
  children: ReactNode
}

export default ScrollTop