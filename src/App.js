import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import EventPage from "./Pages/EventPage/EventPage";
import TicketsPage from "./Pages/TicketsPage/TicketsPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/event/:eventId" element={<EventPage />} />
          <Route path="tickets/:eventId" element={<TicketsPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
