import NavigatorTop from "@/components/NavigatorTop"
import TicketNumberPage from "./tickets-number/TicketNumberPage"
import ScrollTop from "@/components/ScrollTop"
import { Routes, Route } from "react-router-dom"
import SuspenseComponent from "@/components/SuspenseComponent"

const TicketsPage = () => {
  return (
    <div className="w-full min-h-screen">
      <div className="container flex flex-col gap-6 mx-auto pt-8">
        <div className="px-10 lg:px-20 xl:px-[101px]">
          <NavigatorTop />
        </div>
        <div className="px-10 lg:px-20 xl:px-[101px]">
          <ScrollTop>
            <Routes>
              <Route
                path=""
                element={
                  <SuspenseComponent>
                    <TicketNumberPage />
                  </SuspenseComponent>
                }
              ></Route>
              <Route
                path="destino"
                element={
                  <SuspenseComponent>
                    <h1>Destino</h1>
                  </SuspenseComponent>
                }
              ></Route>
               <Route
                path="destino/metodo"
                element={
                  <SuspenseComponent>
                    <h1>Metodo</h1>
                  </SuspenseComponent>
                }
              ></Route>
               <Route
                path="destino/metodo/pagar"
                element={
                  <SuspenseComponent>
                    <h1>Pagar</h1>
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

export default TicketsPage
