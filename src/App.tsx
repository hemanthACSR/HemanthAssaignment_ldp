import { Routes, Route, Navigate } from "react-router-dom";
import CandidateDetails from "./pages/CandidateDetails";
import PreAdverseActionNotice from "./pages/PreAdverseActionNotice";

export default function App() {
  return (
    <Routes>
      {/* Default */}
      <Route path="/" element={<CandidateDetails />} />

      {/* Pages */}
      <Route path="/candidate-details" element={<CandidateDetails />} />
      <Route path="/pre-adverse-action" element={<PreAdverseActionNotice />} />

      {/* Catch all */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
