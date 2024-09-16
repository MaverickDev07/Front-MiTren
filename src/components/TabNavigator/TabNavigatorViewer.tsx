import { useTabNavigationContext } from "@/common/context/tab-context"
import { ReactNode } from "react"

export const TabNavigatorViewer = ({
  children = [],
}: TabNavigatorViewerProps) => {
  const { tabNavigationData } = useTabNavigationContext()
  return (
    <>
      {children.filter(
        (elem: ReactNode, index: number) => index === tabNavigationData.index,
      )}
    </>
  )
}

type TabNavigatorViewerProps = {
  children?: ReactNode[]
}
