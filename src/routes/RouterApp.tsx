import { BrowserRouter } from "react-router-dom"
import RouterList from "./RouterList"
import DecorationLayout from "@/layouts/DecorationLayout"

const RouterApp = () => (
  <BrowserRouter> 
    <DecorationLayout>
      <RouterList />
    </DecorationLayout>
  </BrowserRouter>
)

export default RouterApp
