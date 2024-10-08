import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/Main/MainPage";
import MapPage from "./pages/Map/MapPage";
import ScheduleListPage from "./pages/ScheduleList/ScheduleListPage";
import ScheduleAddPage from "./pages/ScheduleAdd/ScheduleAddPage";
import SettingPage from "./pages/Setting/SettingPage";
import JobListPage from "./pages/JobList/JobListPage";
import JobDetailPage from "./pages/JobDetail/JobDetailPage";
import ChatBotPage from "./pages/ChatBot/ChatBotPage";
import EmployerJobListPage from "./pages/EmployerJobList/EmployerJobList";
import EmployerJobDetailPage from "./pages/EmployerJobDetail/EmployerJobDetailPage";
import EmployerRegistrationPage from "./pages/EmployerRegistration/EmployerRegistrationPage";
import ScrollToTop from "./components/Common/ScrollToTop/ScrollToTop";
import EmployerDocumentPage from "./pages/EmployerDocument/EmployerDocumentPage";
import EmployerDocumentDetailPage from "./pages/EmployerDocumentDetail/EmployerDocumentDetail";

const Router = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/setting" element={<SettingPage />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/calendar" element={<ScheduleListPage />} />
        <Route path="/calendar/add" element={<ScheduleAddPage />} />
        <Route path="/notice" element={<JobListPage />} />
        <Route path="/notice/detail/:id" element={<JobDetailPage />} />
        <Route path="/chatbot" element={<ChatBotPage />} />
        <Route path="/notice-employer" element={<EmployerJobListPage />} />
        <Route path="/notice-employer/detail/:id" element={<EmployerJobDetailPage />} />
        <Route path="/employer-registration" element={<EmployerRegistrationPage />} />
        <Route path="/document-employer" element={<EmployerDocumentPage />} />
        <Route path="/document-employer/:id" element={<EmployerDocumentDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
