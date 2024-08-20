import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/Main/MainPage";
import MapPage from "./pages/Map/MapPage";
import ScheduleListPage from "./pages/ScheduleList/ScheduleListPage";
import ScheduleEditPage from "./pages/ScheduleEdit/ScheduleEditPage";
import ScheduleAddPage from "./pages/ScheduleAdd/ScheduleAddPage";
import SettingPage from "./pages/Setting/SettingPage";
import JobListPage from "./pages/JobList/JobListPage";
import JobDetailPage from "./pages/JobDetail/JobDetailPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/setting" element={<SettingPage />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/calendar" element={<ScheduleListPage />} />
        <Route path="/calendar/edit" element={<ScheduleEditPage />} />
        <Route path="/calendar/add" element={<ScheduleAddPage />} />
        <Route path="/notice" element={<JobListPage />} />
        <Route path="/notice/detail" element={<JobDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
