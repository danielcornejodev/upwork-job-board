import "./styles.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Login from "./Login";
import JobBoard from "./JobBoard";
import JobDetail from "./JobDetail";
import JOBS from "./jobs";
import { useState, useEffect } from "react";

export default function App() {
  const navigate = useNavigate();
  const [allJobs, setAllJobs] = useState(JOBS);
  const [loggedIn, setLoggedin] = useState(false);

  useEffect(() => {
    if (loggedIn) {
      navigate("/jobs");
    }
  }, [loggedIn]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login setLoggedin={setLoggedin} />} />
        <Route path="/jobs" element={<JobBoard allJobs={allJobs} />} />
        <Route path="/job/:id" element={<JobDetail allJobs={allJobs} />} />
      </Routes>
    </div>
  );
}
