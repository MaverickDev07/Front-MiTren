/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
  ReactNode,
} from "react"
import { ITabNavigationItem } from "@/interfaces/tab-navigator.interface"

interface ITabNavigation {
  index?: number
  tabs: ITabNavigationItem[]
}

interface ContextProps {
  tabNavigationData: ITabNavigation | null
  setTabNavigationData: Dispatch<SetStateAction<ITabNavigation>>
  setTabNavigationIndex: (index: number) => void
}

export const TabNavigationContext = createContext<ContextProps>({
  tabNavigationData: null,
  setTabNavigationData: () => {},
  setTabNavigationIndex: () => {},
})

export const TabNavigationContextProvider = ({
  children,
}: TabNavigationContextProps) => {
  const [tabNavigationData, setTabNavigationData] = useState<ITabNavigation>({
    index: 0,
    tabs: [],
  })

  const setTabNavigationIndex = (index: number) => {
    const updateTabs = updateTabActive(index)
    setTabNavigationData({
      index,
      tabs: updateTabs,
    })
  }

  const updateTabActive = (indexActive: number): ITabNavigationItem[] => {
    const updateTabs = tabNavigationData.tabs.map((tab, indexTab) => {
      return {
        ...tab,
        active: indexTab === indexActive,
      }
    })
    return updateTabs
  }

  return (
    <TabNavigationContext.Provider
      value={{
        tabNavigationData,
        setTabNavigationData,
        setTabNavigationIndex,
      }}
    >
      {children}
    </TabNavigationContext.Provider>
  )
}

type TabNavigationContextProps = {
  children: ReactNode
}

export const useTabNavigationContext = () => useContext(TabNavigationContext)
