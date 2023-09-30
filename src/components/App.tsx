import { Routes, Route } from "react-router";
import PATHS from "../constants/paths";
import HomePage from "./HomePage";
import PrivatePage from "./PrivatePage";
import PublicPage from "./PublicPage";

function App() {
  return (
    <>
      <Routes>
        <Route path={PATHS.index} element={<HomePage />} />
        <Route path={PATHS.public} element={<PublicPage />} />
        <Route path={PATHS.private} element={<PrivatePage />} />
      </Routes>
    </>
  );
}

export default App;
