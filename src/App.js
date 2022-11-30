import Config from "./components/Config";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ErrorPage from "./components/ErrorPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Config />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
