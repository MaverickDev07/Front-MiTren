import ScrollTop from "@/components/ScrollTop"
import { Routes, Route } from "react-router-dom"
import SuspenseComponent from "@/components/SuspenseComponent"
import HomeMenu from "./components/HomeMenu"
import HomeReposePage from "./Repose/HomeReposePage"

const HomePage = () => {
  return (
    <div className="w-full min-h-screen">
      <div className="container flex flex-col gap-6 mx-auto pt-8">
        <div className="px-10 lg:px-20 xl:px-[101px]">
          <ScrollTop>
            <Routes>
            <Route
                path=""
                element={
                  <SuspenseComponent>
                    <HomeReposePage />
                  </SuspenseComponent>
                }
              ></Route>
              <Route
                path="Menu"
                element={
                  <SuspenseComponent>
                    <HomeMenu />
                  </SuspenseComponent>
                }
              ></Route>
            </Routes>
          </ScrollTop>
        </div>
      </div>
    </div>
  )
}

export default HomePage
