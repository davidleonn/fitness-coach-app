import { Route, Routes } from "react-router-dom";

import LandingPage from "@/features/landingPage";
import Login from "@/features/login";
import Signup from "@/features/signup";

export const Routing = () => {
  return (
    <Routes>
      <Route index element={<LandingPage />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="*" element={<LandingPage />} />
    </Routes>
  );
};
