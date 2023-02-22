import { Route, Routes } from "react-router-dom";
import Home from "./views/Home/Home";
import Image from "./views/Image/Image";
import Nothing from "./views/Nothing/Nothing";

const App = ()=> {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="images/:id" element={<Image />} />
        <Route path="*" element={<Nothing />} />
      </Route>
    </Routes>
  );
}

export default App;
