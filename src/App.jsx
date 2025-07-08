import { Routes } from "react-router-dom";
import Home from "./pages/home";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" component={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
