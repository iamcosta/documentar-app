import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ResponsaveisPage } from "../pages/ResponsaveisPage";
import { MainLayout } from "../components/MainLayout";

export function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Navigate to="/responsaveis" />} />
          <Route path="/responsaveis" element={<ResponsaveisPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
