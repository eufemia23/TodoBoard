import Navbar from "./components/Navbar";
import TasksPage from "./pages/TasksPage";
import { useEffect, useState } from "react";
import MobileSidebar from "./components/MobileSidebar";
import DesktopSidebar from "./components/DesktopSidebar"
import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import FoldersPage from "./pages/FoldersPage";
import RegisterPage from "./pages/RegisterPage"
import LoginPage from "./pages/LoginPage";
import CurrentUserPage from "./pages/CurrentUserPage";
import TasksPageNotLoggedIn from "./pages/TaskPageNotLoggedIn";

const App = () => {
  const [isDesktop, setDesktop] = useState(window.innerWidth >= 768);
  const [isMobile, setMobile] = useState(window.innerWidth < 768);

  const updateMedia = () => {
    setDesktop(window.innerWidth >= 768);
    setMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });
  return (
    <div>
      <div className="h-screen w-full relative">
        {/* Aurora Dream Soft Harmony */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background: `
       radial-gradient(ellipse 80% 60% at 60% 20%, rgba(175, 109, 255, 0.50), transparent 65%),
        radial-gradient(ellipse 70% 60% at 20% 80%, rgba(255, 100, 180, 0.45), transparent 65%),
        radial-gradient(ellipse 60% 50% at 60% 65%, rgba(255, 235, 170, 0.43), transparent 62%),
        radial-gradient(ellipse 65% 40% at 50% 60%, rgba(120, 190, 255, 0.48), transparent 68%),
        linear-gradient(180deg, #f7eaff 0%, #fde2ea 100%)
      `,
          }}
        >
          {isDesktop && <DesktopSidebar />}
          {isMobile && <MobileSidebar />}
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/tasks" element={<TasksPageNotLoggedIn />} />
            <Route path="/tasks/:userid" element={<TasksPage />} />
            <Route path="/folders" element={<FoldersPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/current/:userid" element={<CurrentUserPage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
