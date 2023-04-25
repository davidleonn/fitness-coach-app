import { Route, Routes } from "react-router-dom";

import LandingPage from "@/features/landingPage";
import Login from "@/features/login";
import Register from "@/features/register";
import ClientRegister from "@/features/clientRegister";

export const Routing = () => {
  return (
    <Routes>
      <Route index element={<LandingPage />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="new-client" element={<ClientRegister />} />
      <Route path="*" element={<LandingPage />} />
    </Routes>
  );
};
