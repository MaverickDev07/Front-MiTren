import { ITabNavigationItem } from "@/common/interfaces/tab-navigator.interface"
import TabNavigationItem from "./TabNavigationItem"
import { useTabNavigationContextManager } from "@/common/hooks/tab-context-manager.hook"
import { scrollTop } from "@/common/helpers/scroll-top.helper"

export const TabNavigatorOptions = ({ tabItems }: TabNavigatorOptionsProps) => {
  const { tabIndex } = useTabNavigationContextManager()

  const handleTabIndex = (index: number) => {
    tabIndex(index)
    scrollTop(700)
  }

  return (
    <div className="flex flex-row md:flex-col gap-4 w-full overflow-scroll">
      {tabItems.map((item: ITabNavigationItem, index: number) => (
        <TabNavigationItem
          key={`tab-${index}`}
          onClick={(): void => {
            handleTabIndex(index)
          }}
          itemData={{
            ...item,
            index: index + 1,
          }}
        />
      ))}
    </div>
  )
}

type TabNavigatorOptionsProps = {
  tabItems: ITabNavigationItem[]
}
