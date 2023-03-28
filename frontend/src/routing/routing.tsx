import { Route, Routes } from "react-router-dom";

import LandingPage from "@/features/landingPage";
import Login from "@/features/login";

export const Routing = () => {
  return (
    <Routes>
      <Route index element={<LandingPage />} />
      <Route path="login" element={<Login />} />
    </Routes>
  );
};
