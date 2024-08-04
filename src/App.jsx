import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import ListBuys from "./pages/listBuys";
import ListRents from "./pages/listRents";
import ListSolds from "./pages/listSolds";
import Detail from "./pages/detail";
import ListByLocations from "./pages/listByLocations";
import Login from "./pages/login";
import SignUp from "./pages/signup";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="signup" element={<SignUp></SignUp>}></Route>
        <Route path="/listbuys" element={<ListBuys></ListBuys>}></Route>
        <Route path="/listrents" element={<ListRents></ListRents>}></Route>
        <Route path="/listsolds" element={<ListSolds></ListSolds>}></Route>
        <Route path="/detail" element={<Detail></Detail>}></Route>
        <Route path="/listbylocations" element={<ListByLocations></ListByLocations>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
