// eslint-disable-next-line camelcase
import { IBM_Plex_Sans } from "next/font/google"
import { TAB_NAVIGATION_STATUS } from "@/common/enums/tab-navigation.enum"
import { ITabNavigationItem } from "@/common/interfaces/tab-navigator.interface"
import CheckIcon from "@/common/branding/icons/CheckIcon"
import { useEffect, useRef } from "react"
import { useWindowSize } from "usehooks-ts"

const ibmPlexSans = IBM_Plex_Sans({ weight: "500", subsets: ["latin"] })

const ROUNDED_BACKGROUND = {
  [TAB_NAVIGATION_STATUS.HOLD]: "rgba(227, 238, 255, 0.4)",
  [TAB_NAVIGATION_STATUS.COMPLETE]: "transparent",
}

const ITEM_BACKGROUND = {
  [TAB_NAVIGATION_STATUS.HOLD]: "transparent",
  [TAB_NAVIGATION_STATUS.COMPLETE]: "rgba(239, 255, 228, 0.4)",
}

const TabNavigationItem = ({ itemData, onClick }: TabNavigationItemProps) => {
  const itemRef = useRef(null)
  const { width: widthScreen } = useWindowSize()

  const scrollPosition = () => {
    if (itemRef) {
      const currentRef = itemRef.current as HTMLElement
      const parentRef = currentRef.parentElement
      parentRef.scrollTo(currentRef.offsetLeft, 0)
    }
  }

  useEffect(() => {
    if (itemData.active) {
      if (widthScreen < 768) {
        scrollPosition()
      }
    }
  }, [itemData.active])

  useEffect(() => {
    if (widthScreen < 768) {
      if (itemData.active) {
        scrollPosition()
      }
    }
  }, [widthScreen])

  return (
    <div
      ref={itemRef}
      className={`flex justify-start items-center gap-3 w-full px-4 py-2 md:w-48 md:px-2 select-none rounded-xl cursor-pointer text-sy-brand-950 ${ibmPlexSans.className} font-medium`}
      onClick={onClick}
      style={{
        backgroundColor: `${itemData.active ? "#e3eeff" : ITEM_BACKGROUND[itemData.status]}`,
        pointerEvents: `${itemData.status === TAB_NAVIGATION_STATUS.BLOCKED ? "none" : "auto"}`,
        opacity: `${itemData.status === TAB_NAVIGATION_STATUS.BLOCKED ? "0.5" : "1"}`,
      }}
    >
      <div
        className="flex justify-center items-center rounded-full w-6 h-6 bg-white"
        style={{
          backgroundColor: `${itemData.active ? "#fff" : ROUNDED_BACKGROUND[itemData.status]}`,
        }}
      >
        <>
          {itemData.status === TAB_NAVIGATION_STATUS.COMPLETE ? (
            <CheckIcon size={88} />
          ) : (
            <span>{itemData.index}</span>
          )}
        </>
      </div>
      <span className="text-nowrap">{itemData.title}</span>
    </div>
  )
}

interface TabItemData extends ITabNavigationItem {
  index: number
}
type TabNavigationItemProps = {
  itemData: TabItemData
  onClick: () => void
}

export default TabNavigationItem
