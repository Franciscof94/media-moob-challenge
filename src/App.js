import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./views/Home";
import Privacity from "./views/Privacity";
import { useSelector } from "react-redux";
import { GlobalStyles } from "./styles/GlobalStyles";

const App = () => {
  const { showModal } = useSelector((state) => state.showModal);
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/privacity" element={<Privacity />}></Route>
      </Routes>
      <GlobalStyles showModal={showModal.payload} />
    </div>
  );
};

export default App;
