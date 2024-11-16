import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainLayout from "./layout/MainLayout";
import NotFoundPage from "./pages/NotFoundPage";
import CountryPage from "./pages/CountryPage";

const App = () => {
  return (
      <Routes>
        <Route path="/Worldopedia" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/country/:name" element={<CountryPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
  );
};

export default App;
