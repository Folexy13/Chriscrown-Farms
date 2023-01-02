import "./App.scss";
import { Route, Routes } from "react-router-dom";
import { ROUTES } from "./routes";
import { Homepage } from "./Pages/Public";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={ROUTES.HOME} element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
