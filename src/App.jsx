import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import ListBuys from "./pages/listBuys";
import ListRents from "./pages/listRents";
import ListSolds from "./pages/listSolds";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/listbuys" element={<ListBuys></ListBuys>}></Route>
        <Route path="/listrents" element={<ListRents></ListRents>}></Route>
        <Route path="/listsolds" element={<ListSolds></ListSolds>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
